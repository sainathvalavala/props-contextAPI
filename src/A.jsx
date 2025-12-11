import React from "react";
import B from "./B";

function A({ details }) {
  return (
    <div>
      A<h1>{details.username}</h1>
      <div className="border border-2 p-2 m-3 border-danger">
        <B details={details}></B>
      </div>
    </div>
  );
}

export default A;
