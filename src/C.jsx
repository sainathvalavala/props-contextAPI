import React, { useContext } from "react";
import UserContext from "./myContext";

// ============================================================
// C: The deepest component — also a Consumer
// ============================================================
// BUG FIX: previously C expected a `details` prop: function C({ details }).
// But nobody passed that prop, so `details` was undefined and
// `details.username` crashed the app.
//
// With Context API, C doesn't need props at all — it reads the data
// straight from the context, skipping A and B entirely.
function C() {
  const details = useContext(UserContext);
  console.log(details)

  return (
    <>
      <h1>{details.username}</h1>
      <div>C — age: {details.age}</div>
    </>
  );
}

export default C;
