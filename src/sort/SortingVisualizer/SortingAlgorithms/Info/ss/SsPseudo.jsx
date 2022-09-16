import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function SsPseudo() {
  const code1 = "selectionSort(array, size)";
  const code2 = "   repeat (size - 1) times";
  const code3 = "   set the first unsorted element as the minimum";
  const code4 = "   for each of the unsorted elements";
  const code5 = "       if element < currentMinimum";
  const code6 = "           set element as new minimum";
  const code7 = "      swap minimum with first unsorted position       ";
  const code8 = "end selectionSort";

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
    </div>
  );
}
