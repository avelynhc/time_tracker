import React from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const { seconds, minutes, hours, days, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      {/* <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div> */}
    </div>
  );
};

export default Timer;
