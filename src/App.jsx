import React from "react";
import A from "./A";
function App() {
  const details = {
    username: "sai",
    age: "24",
  };
  return (
    <details.Provider value={details}>
      <div className="border border-2 p-2 m-3 border-info">
        <h1 className="text-danger">Context API</h1>
        <div className="border border-2 p-2 m-3 border-primary">
          <A></A>
        </div>
      </div>
    </details.Provider>
  );
}

export default App;
