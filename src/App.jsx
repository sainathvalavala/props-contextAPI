import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div className="border border-5 p-3 m-3 border-primary">
      App
      <div>
        <Counter></Counter>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>{Counter()}</div>
    </div>
  );
}

export default App;
