import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function Pseudo() {
  const code1 = "bubbleSort(array)";
  const code2 = "   for i <- 1 to indexOfLastUnsortedElement-1";
  const code3 = "        if leftElement > rightElement";
  const code4 = "           swap leftElement and rightElement";
  const code5 = "end bubbleSort";

  return (
    <div className="pseudocode">
      <SyntaxHighlighter language="python" style={dracula} children={code1} />

      <SyntaxHighlighter language="python" style={dracula} children={code2} />

      <SyntaxHighlighter language="python" style={dracula} children={code3} />

      <SyntaxHighlighter language="python" style={dracula} children={code4} />

      <SyntaxHighlighter language="python" style={dracula} children={code5} />
    </div>
  );
}
