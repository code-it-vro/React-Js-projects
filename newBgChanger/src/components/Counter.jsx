import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    if (counter < 1) {
      alert("you can not decrease value further");
    } else {
      setCounter((counter = counter - 1));
    }
  };

  return (
    <div>
      <button onClick={addValue}>Add</button>
      <button onClick={subValue}>Sub</button>
      <div className="result">{counter}</div>
    </div>
  );
};

export default Counter;
