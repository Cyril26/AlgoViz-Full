import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function Python() {
  const code1 = "# Selection sort in Python  ";
  const code2 = "";
  const code3 = "def selectionSort(array, size):";
  const code4 = "";
  const code5 = "   for step in range(size):";
  const code6 = "      min_idx = step";
  const code15 = "             ";
  const code7 = "      for i in range(step + 1, size):";
  const code8 = "       ";
  const code9 =
    "         # to sort in descending order, change > to < in this line    ";
  const code10 = "        # select the minimum element in each loop ";
  const code11 = "        if array[i] < array[min_idx]:";
  const code12 = "            min_idx = i";
  const code13 = "         ";
  const code14 = "      # put min at the correct position";
  const code16 =
    "      (array[step], array[min_idx]) = (array[min_idx], array[step])";
  const code17 = "         ";
  const code18 = "         ";
  const code19 = "data = [-2, 45, 0, 11, -9]";
  const code20 = "size = len(data)";
  const code21 = "selectionSort(data, size)  ";
  const code22 = "print('Sorted Array in Ascending Order:')  ";
  const code23 = "print(data)  ";
  //   const code24 = "  ";
  //   const code25 = "  print('Sorted Array in Ascending Order:')  ";
  //   const code26 = "  print(data)  ";
  // const code27 = "   return v";
  // const code28 = "  ";
  // const code29 = "num_of_vertices = len(vertices[0])";
  // const code30 = "  ";
  // const code31 = "visited_and_distance = [[0, 0]]";

  //   const code32 = "visited_and_distance = [[0, 0]]";
  //   const code33 = "visited_and_distance = [[0, 0]]";
  //   const code34 = "visited_and_distance = [[0, 0]]";
  //   const code35 = "visited_and_distance = [[0, 0]]";
  //   const code36 = "visited_and_distance = [[0, 0]]";
  //   const code37 = "visited_and_distance = [[0, 0]]";
  //   const code38 = "visited_and_distance = [[0, 0]]";
  //   const code39 = "visited_and_distance = [[0, 0]]";
  //   const code40 = "visited_and_distance = [[0, 0]]";
  //   const code41 = "visited_and_distance = [[0, 0]]";
  //   const code42 = "visited_and_distance = [[0, 0]]";
  //   const code43 = "visited_and_distance = [[0, 0]]";
  //   const code44 = "visited_and_distance = [[0, 0]]";
  //   const code45 = "visited_and_distance = [[0, 0]]";
  //   const code46 = "visited_and_distance = [[0, 0]]";
  //   const code47 = "visited_and_distance = [[0, 0]]";
  //   const code48 = "visited_and_distance = [[0, 0]]";
  //   const code49 = "visited_and_distance = [[0, 0]]";
  //   const code50 = "visited_and_distance = [[0, 0]]";
  //   const code51 = "visited_and_distance = [[0, 0]]";

  return (
    <div className="code">
      <SyntaxHighlighter language="python" style={dracula} children={code1} />

      <SyntaxHighlighter language="python" style={dracula} children={code2} />

      <SyntaxHighlighter language="python" style={dracula} children={code3} />

      <SyntaxHighlighter language="python" style={dracula} children={code4} />

      <SyntaxHighlighter language="python" style={dracula} children={code5} />

      <SyntaxHighlighter language="python" style={dracula} children={code6} />

      <SyntaxHighlighter language="python" style={dracula} children={code15} />

      <SyntaxHighlighter language="python" style={dracula} children={code7} />

      <SyntaxHighlighter language="python" style={dracula} children={code8} />

      <SyntaxHighlighter language="python" style={dracula} children={code9} />

      <SyntaxHighlighter language="python" style={dracula} children={code10} />

      <SyntaxHighlighter language="python" style={dracula} children={code11} />

      <SyntaxHighlighter language="python" style={dracula} children={code12} />

      <SyntaxHighlighter language="python" style={dracula} children={code13} />

      <SyntaxHighlighter language="python" style={dracula} children={code14} />

      <SyntaxHighlighter language="python" style={dracula} children={code16} />

      <SyntaxHighlighter language="python" style={dracula} children={code17} />

      <SyntaxHighlighter language="python" style={dracula} children={code18} />

      <SyntaxHighlighter language="python" style={dracula} children={code19} />

      <SyntaxHighlighter language="python" style={dracula} children={code20} />

      <SyntaxHighlighter language="python" style={dracula} children={code21} />

      <SyntaxHighlighter language="python" style={dracula} children={code22} />

      <SyntaxHighlighter language="python" style={dracula} children={code23} />

      {/* <SyntaxHighlighter language="python" style={dracula} children={code24} />

      <SyntaxHighlighter language="python" style={dracula} children={code25} />

      <SyntaxHighlighter language="python" style={dracula} children={code26} /> */}

      {/* <SyntaxHighlighter language="python" style={dracula} children={code27} />

      <SyntaxHighlighter language="python" style={dracula} children={code28} />

      <SyntaxHighlighter language="python" style={dracula} children={code29} />

      <SyntaxHighlighter language="python" style={dracula} children={code30} />

      <SyntaxHighlighter language="python" style={dracula} children={code31} /> */}
    </div>
  );
}

// "for i in range(num_of_vertices-1):"    visited_and_distance.append([0, sys.maxsize])

// for vertex in range(num_of_vertices):

//     # Find next vertex to be visited
//     to_visit = to_be_visited()
//     for neighbor_index in range(num_of_vertices):

//         # Updating new distances
//         if vertices[to_visit][neighbor_index] == 1 and \
//                 visited_and_distance[neighbor_index][0] == 0:
//             new_distance = visited_and_distance[to_visit][1] \
//                 + edges[to_visit][neighbor_index]
//             if visited_and_distance[neighbor_index][1] > new_distance:
//                 visited_and_distance[neighbor_index][1] = new_distance

//         visited_and_distance[to_visit][0] = 1

// i = 0

// # Printing the distance
// for distance in visited_and_distance:
//     print("Distance of ", chr(ord('a') + i),
//           " from source vertex: ", distance[1])
//     i = i + 1
