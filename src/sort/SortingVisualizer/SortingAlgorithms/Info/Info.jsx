import React from "react";
import SsInfo from "./ss/ss";
import IsInfo from "./is/is";
import BsInfo from "./bs/bs";

import "./info.css";

export default function Info({ runningAlgo }) {
  if (runningAlgo === "bs") {
    return <BsInfo />;
  } else if (runningAlgo === "ss") {
    return <SsInfo />;
  } else if (runningAlgo === "is") {
    return <IsInfo />;
  }
}
