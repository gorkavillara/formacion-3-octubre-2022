import React, { useState } from "react";
import Contador from "./performance/Contador";
import HooksPerformance from "./performance/HooksPerformance";

const Performance = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* <Contador valorInicial={0} /> */}
      <HooksPerformance />
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "Off" : "On"}
      </button>
    </>
  );
};

export default Performance;
