import React from "react";
import B from "./B";

// ============================================================
// A: A "middle" component
// ============================================================
// A does NOT need the user details, so it doesn't read the context
// and it doesn't receive or forward any props.
// This is the whole point of Context API: in-between components stay
// clean — no prop drilling.
function A() {
  return (
    <div>
      A
      <div className="border border-2 p-2 m-3 border-danger">
        <B></B>
      </div>
    </div>
  );
}

export default A;
