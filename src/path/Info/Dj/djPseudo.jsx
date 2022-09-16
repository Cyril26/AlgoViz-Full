import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../info.css";

export default function Pseudo() {
  const code1 = "function dijkstra(G, S)";
  const code2 = "   for each vertex V in G";
  const code3 = "           distance[V] <- infinite";
  const code4 = "           previous[V] <- NULL";
  const code5 = "           if V != S, add V to Priority Queue Q";
  const code6 = "               distance[S] <- 0  ";
  const code15 = "  ";
  const code7 = "   while Q IS NOT EMPTY";
  const code8 = "        U <- Extract MIN from Q";
  const code9 = "        for each unvisited neighbour V of U";
  const code10 =
    "            tempDistance <- distance[U] + edge_weight(U, V)  ";
  const code11 = "           if tempDistance < distance[V]";
  const code12 = "                distance[V] <- tempDistance";
  const code13 = "                previous[V] <- U";
  const code14 = "  return distance[], previous[]";

  return (
    <div className="code">
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code1}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code2}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code3}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code4}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code5}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code6}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code15}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code7}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code8}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code9}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code10}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code11}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code12}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code13}
      />

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        children={code14}
      />
    </div>
  );
}
