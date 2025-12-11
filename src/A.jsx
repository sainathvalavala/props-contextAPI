import React from "react";
import B from "./B"

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
