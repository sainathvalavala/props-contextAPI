import React, { useContext } from "react";
import C from "./C";
import details from "./myContext";
function B() {
  let data = useContext(details);
  return (
    <div>
      B<h1>{data.username}</h1>
      <div className="border border-2 p-2 m-3 border-primary"></div>
      <C></C>
    </div>
  );
}
export default B;
