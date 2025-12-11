import React from "react";
import C from "./C";

function B({ details }) {
  return (
    <div>
      B<h1>{details.username}</h1>
      <div className="border border-2 p-2 m-3 border-primary">
        <C details={details}></C>
      </div>
    </div>
  );
}

export default B;
