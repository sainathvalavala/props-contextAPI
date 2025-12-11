import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className="border border-3 border-info m-2 p-2">
      <div>Counter :{count}</div>
      <button
        className="btn btn-success me-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
