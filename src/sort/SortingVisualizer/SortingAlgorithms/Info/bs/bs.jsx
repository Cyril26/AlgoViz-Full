import React from "react";
import BsPseudo from "./BsPseudo";
import Python from "./BsCode";

export default function BsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-header">Bubble Sort</h1>
      <p>
        Bubble sort is a sorting algorithm that compares two adjacent elements
        and swaps them until they are in the intended order.
      </p>
      <p>
        Just like the movement of air bubbles in the water that rise up to the
        surface, each element of the array move to the end in each iteration.
        Therefore, it is called a bubble sort.
      </p>

      <h2 className="info-header">Working of Bubble Sort</h2>

      <p>Suppose we are trying to sort the elements in ascending order.</p>

      <h3>1. First Iteration (Compare and Swap)</h3>
      <ol className="info-list">
        <li>
          Starting from the first index, compare the first and the second
          elements.
        </li>
        <li>
          If the first element is greater than the second element, they are
          swapped.
        </li>
        <li>
          Now, compare the second and the third elements. Swap them if they are
          not in order.
        </li>
        <li>The above process goes on until the last element.</li>
      </ol>
      <h3>2. Remaining Iteration</h3>
      <p>
        The same process goes on for the remaining iterations. After each
        iteration, the largest element among the unsorted elements is placed at
        the end.In each iteration, the comparison takes place up to the last
        unsorted element. The array is sorted when all the unsorted elements are
        placed at their correct positions.
      </p>
      <h3 className="info-header">Bubble Sort Algorithm</h3>
      <BsPseudo />

      <h3 className="info-header">Bubble Sort Code in Python</h3>
      <Python />

      <h3 className="info-header">Bubble Sort Complexity</h3>
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

      <h3 className="info-header">Bubble Sort Applications</h3>
      <p>Bubble Sort is used if</p>
      <ul className="info-list">
        <li>complexity does not matter</li>
        <li>short and simple code is preferred</li>
      </ul>
    </div>
  );
}
