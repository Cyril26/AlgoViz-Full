import React from "react";
import IsPseudo from "./IsPseudo";
import Python from "./IsCode";

export default function IsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-header">Insertion Sort</h1>
      <p>
        Insertion sort is a sorting algorithm that places an unsorted element at
        its suitable place in each iteration.
      </p>

      <p>
        Insertion sort works similarly as we sort cards in our hand in a card
        game.
        <br />
        We assume that the first card is already sorted then, we select an
        unsorted card. If the unsorted card is greater than the card in hand, it
        is placed on the right otherwise, to the left. In the same way, other
        unsorted cards are taken and put in their right place.
        <br />A similar approach is used by insertion sort.
      </p>

      <h2 className="info-header">Working of Insertion Sort</h2>

      <p>Suppose we are trying to sort the elements in ascending order.</p>

      <ol className="info-list">
        <li>
          The first element in the array is assumed to be sorted. Take the
          second element and store it separately in key.
          <br />
          Compare key with the first element. If the first element is greater
          than key, then key is placed in front of the first element.
        </li>
        <li>
          Now, the first two elements are sorted.
          <br />
          Take the third element and compare it with the elements on the left of
          it. Placed it just behind the element smaller than it. If there is no
          element smaller than it, then place it at the beginning of the array.
        </li>
        <li>
          Similarly, place every unsorted element at its correct position.
        </li>
      </ol>
      <h3 className="info-header">Insertion Sort Algorithm</h3>
      <IsPseudo />

      <h3 className="info-header">Insertion Sort Code in Python</h3>
      <Python />

      <h3 className="info-header">Insertion Sort Complexity</h3>
      <table className="info-table">
        <tr>
          <th>
            {" "}
            <strong>Time Complexity</strong>
          </th>
          <td></td>
        </tr>
        <tr>
          <td>Best</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Worst</td>
          <td>
            O(n <sup>2</sup>)
          </td>
        </tr>
        <tr>
          <td>Average</td>
          <td>
            O(n <sup>2</sup>)
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong>Space Complexity</strong>{" "}
          </td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>
            <strong>Stability</strong>
          </td>
          <td>Yes</td>
        </tr>
      </table>

      <h3 className="info-header">Insertion Sort Applications</h3>
      <p>Insertion Sort is used if</p>
      <ul className="info-list">
        <li>the array is has a small number of elements</li>
        <li>there are only a few elements left to be sorted</li>
      </ul>
    </div>
  );
}
