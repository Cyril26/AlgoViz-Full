import getSelectionSortAnimations from "./getSelectionSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const SelectionSort = (array, animationSpeed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
  disableButtons();

  // Getting the animations which has been generated in the "getBubbleSortAnimations" function.
  const animations = getSelectionSortAnimations(array);

  for (let i = 0; i < animations.length; i += 6) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      minIndexElement = animations[i + 2],
      doSwap = animations[i + 3],
      isFinalElement = animations[i + 4],
      finalElement = animations[i + 5];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of current elements.
        changeBackgroundColor(minIndexElement, "rgba(235, 123, 19, 0.5)");
        changeBackgroundColor(comparingElement1, "rgba(255, 48, 79, 1)");
        changeBackgroundColor(comparingElement2, "rgba(255, 48, 79, 1)");

        if (doSwap === true) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
          swapBars(comparingElement1, minIndexElement);
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isFinalElement === true) {
          // Changing the color-bar of finalElement index which has taken its final sorted position.
          changeBackgroundColor(finalElement, "rgba(131, 232, 90, 0.5)");
          changeBoxShadow(
            finalElement,
            "5px 5px 50px 5px rgba(131, 232, 90, 0.5)"
          );
        } else {
          // Changing the color-bar of elements which has not taken its final sorted position yet.
          changeBackgroundColor(comparingElement2, "rgba(61, 90, 241, 0.5)");
          changeBackgroundColor(minIndexElement, "rgba(61, 90, 241, 0.5)");
        }

        // From "getSelectionSortAnimations" function, we know that the array is sorted when finalElement is (array.length - 1).
        // Resolving the promise when the finalElement index is (array.length - 1).
        if (finalElement === array.length - 1) resolve();
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(playCompletedSoundEffect)
      // Enabling the buttons when both the promises have been resolved.
      .then(enableButtons);
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 6) * animationSpeed);
};

export default SelectionSort;
