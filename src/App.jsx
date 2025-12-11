import React from "react";
import Counter from "./Counter";

function App() {
  function abc(val) {
    //abc should receive data from child so created a param named val.
    alert(`called ${val ? val : " but data not sent from child"}`);
  }
  return (
    <div className="border border-5 p-3 m-3 border-primary">
      App
      <div>
        <button
          onClick={() => {
            abc();
          }}
        >
          Parent
        </button>
      </div>
      <div>
        <Counter step={10} a={abc}>
          100
        </Counter>
      </div>
      <div>
        <Counter step={5} a={abc}>
          200
        </Counter>
      </div>
      {/* <div>{Counter()}</div> */}
    </div>
  );
}

export default App;
