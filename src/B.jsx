import React, { useContext } from "react";
// BUG FIX: file is C.jsx, so import "./C" (not "./c"). Imports are
// case-sensitive on Linux/Mac and in most deployment builds.
import C from "./C";
import UserContext from "./myContext";

// ============================================================
// STEP 3: CONSUME THE DATA (B is a "Consumer")
// ============================================================
function B() {
  // useContext(UserContext) reads the `value` from the nearest
  // <UserContext.Provider> above this component — here, App's `details`.
  const data = useContext(UserContext);

  return (
    <div>
      B<h1>{data.username}</h1>
      <div className="border border-2 p-2 m-3 border-primary">
        {/* No props passed to C — it will read the context itself */}
        <C></C>
      </div>
    </div>
  );
}

export default B;
