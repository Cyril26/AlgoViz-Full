import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function IsPseudo() {
  const code1 = "insertionSort(array)  ";
  const code2 = "   mark first element as sorted";
  const code3 = "    for each unsorted element X  ";
  const code4 = "       'extract' the element X";
  const code5 = "       for j <- lastSortedIndex down to 0";
  const code6 = "           if current element j > X";
  const code7 = "              move sorted element to the right by 1      ";
  const code8 = "       break loop and insert X here";
  const code9 = "end insertionSort  ";

  return (
    <div className="pseudocode">
      <SyntaxHighlighter language="python" style={dracula} children={code1} />

      <SyntaxHighlighter language="python" style={dracula} children={code2} />

      <SyntaxHighlighter language="python" style={dracula} children={code3} />

      <SyntaxHighlighter language="python" style={dracula} children={code4} />

      <SyntaxHighlighter language="python" style={dracula} children={code5} />

      <SyntaxHighlighter language="python" style={dracula} children={code6} />

      <SyntaxHighlighter language="python" style={dracula} children={code7} />

      <SyntaxHighlighter language="python" style={dracula} children={code8} />

      <SyntaxHighlighter language="python" style={dracula} children={code9} />
    </div>
  );
}
