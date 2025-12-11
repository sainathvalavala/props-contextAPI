import React, { useState } from "react";

function Counter(props) {
  console.log(props);
  let [count, setCount] = useState(+(props.children));
  return (
    <div className="border border-3 border-info m-2 p-2">
      <div>Counter :{count}</div>
      <button
        className="btn btn-success me-2"
        onClick={() => {
          setCount(count + props.step);
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
{/* send data from child to parent as an argument and the parent receives it */}
      <button onClick={()=>{props.a("parent")}}>child</button>
    </div>
  );
}

export default Counter;
