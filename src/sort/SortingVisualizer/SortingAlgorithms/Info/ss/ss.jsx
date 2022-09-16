import React from "react";
import SsPseudo from "./SsPseudo";
import Python from "./SsCode";

export default function SsInfo() {
  return (
    <div className="info-container">
      <h1 className="info-header">Selection Sort</h1>
      <p>
        Selection sort is a sorting algorithm that selects the smallest element
        from an unsorted list in each iteration and places that element at the
        beginning of the unsorted list.
      </p>

      <h2 className="info-header">Working of Selection Sort</h2>

      <ol className="info-list">
        <li>Set the first element as minimum</li>
        <li>
          Compare minimum with the second element. If the second element is
          smaller than minimum, assign the second element as minimum. Compare
          minimum with the third element. Again, if the third element is
          smaller, then assign minimum to the third element otherwise do
          nothing. The process goes on until the last element.
        </li>
        <li>
          After each iteration, minimum is placed in the front of the unsorted
          list.
        </li>
        <li>
          For each iteration, indexing starts from the first unsorted element.
          Step 1 to 3 are repeated until all the elements are placed at their
          correct positions.
        </li>
      </ol>
      <h3 className="info-header">Selection Sort Algorithm</h3>
      <SsPseudo />

      <h3 className="info-header">Selection Sort Code in Python</h3>
      <Python />

      <h3 className="info-header">Selection Sort Complexity</h3>
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
          <td>
            O(n <sup>2</sup>)
          </td>{" "}
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
          <td>No</td>
        </tr>
      </table>

      <h3 className="info-header">Selection Sort Applications</h3>
      <p>Bubble Sort is used if</p>
      <ul className="info-list">
        <li>a small list is to be sorted</li>
        <li>cost of swapping does not matter</li>
        <li>checking of all the elements is compulsory</li>
        <li>
          cost of writing to a memory matters like in flash memory (number of
          writes/swaps is O(n) as compared to O(n <sup>2</sup>) of bubble sort)
        </li>
      </ul>
    </div>
  );
}
