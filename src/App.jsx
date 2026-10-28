import React from "react";
import A from "./A";
// Import the context object we created in myContext.js
import UserContext from "./myContext";

// ============================================================
// STEP 2: PROVIDE THE DATA (App is the "Provider")
// ============================================================
function App() {
  // This is the data we want to share with deeply nested components.
  const details = {
    username: "sai",
    age: "24",
  };

  // <UserContext.Provider value={...}> makes `details` available to
  // EVERY component rendered inside it (A, B, C, ...), no matter how
  // deep — without passing any props.
  //
  // BUG FIX: previously this was <details.Provider>. `details` is just a
  // plain object, it has no `.Provider`. Only a context created with
  // createContext() has a Provider.
  return (
    <UserContext.Provider value={details}>
      <div className="border border-2 p-2 m-3 border-info">
        <h1 className="text-danger">Context API</h1>
        <div className="border border-2 p-2 m-3 border-primary">
          {/* Notice: no props passed to A */}
          <A></A>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
