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
  const { testPhrase, writePhrase, dispatchWrite } =
    useContext(SpeedTestContext);
  return (
    <div className={styles["speed-tester"]}>
      <h3>Speed Tester</h3>
      <div className={styles.container}>
        <TestPhrase testPhrase={testPhrase} writePhrase={writePhrase} />
      </div>
      <input
        type="text"
        value={writePhrase}
        onChange={(e) =>
          dispatchWrite({
            type: "tryWrite",
            payload: { written: e.target.value, testPhrase },
          })
        }
      />
    </div>
  );
};

export default SpeedTest;
