import React, { useContext, useRef } from "react";
import { SpeedTestContext } from "../../contexts/SpeedTestContextProvider";
import styles from "./SpeedTest.module.scss";

const TestPhrase = ({ testPhrase, writePhrase }) => {
  return (
    <>
      <span style={{ color: "green" }}>{writePhrase}</span>
      <span>{testPhrase.substr(writePhrase.length)}</span>
    </>
  );
};

const SpeedTest = () => {
  const { testPhrase, writePhrase, dispatchWrite, timeElapsed } =
    useContext(SpeedTestContext);
  return (
    <div className={styles["speed-tester"]}>
      <h3>Speed Tester</h3>
      <div className={styles.container}>
        <TestPhrase testPhrase={testPhrase} writePhrase={writePhrase} />
      </div>
      {timeElapsed && <span>Tu tiempo ha sido de {timeElapsed} segundos</span>}
      <input
        type="text"
        value={writePhrase}
        onChange={(e) =>
          dispatchWrite({
            type: "tryWrite",
            payload: { written: e.target.value, testPhrase },
          })
        }
        disabled={typeof timeElapsed !== "undefined"}
      />
      <button onClick={() => dispatchWrite({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default SpeedTest;
