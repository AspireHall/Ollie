import React, { useState, useEffect } from "react";
import clock from "../Assets/clock67pixel.png";
let timeIntervalId;
export default function Timer(props, { gameOver, sendTime }) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    if (props.onGameOver === false) {
      function incrementTime() {
        setTimeout(() => {
          let newTime = time + 1;
          setTime(newTime);
        }, 1000);
      }
      incrementTime();
    } else {
      function stopTime() {
        setTimeout(() => {
          let newTime = time + 0;
          setTime(newTime);
        }, 1000);
      }
      stopTime();
    }
  }, [time]);
  console.log(time);
  console.log(props.onGameOver);

  return (
    <div style={{ color: "white", fontSize: 30, background: "maroon" }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        <img
          style={{ width: "30px", height: "35px", marginLeft: "10px" }}
          src={clock}
          alt="clock"
        />
      </span>
      {time}
    </div>
  );
}

/*  function incrementTime() {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    }
    incrementTime();
    
  }, [time]);

  */
