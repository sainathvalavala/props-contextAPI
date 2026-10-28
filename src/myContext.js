// ============================================================
// STEP 1: CREATE THE CONTEXT
// ============================================================
// Problem Context API solves: "prop drilling".
// Without context, to get data from App -> C we'd have to pass it
// as props through A and B, even though A and B don't need it:
//     App --props--> A --props--> B --props--> C
//
// With context, App puts the data into a shared "channel", and ANY
// component below it can read directly from that channel:
//     App (Provider) ............................> C (useContext)
//
// createContext() creates that channel. The argument is the DEFAULT
// value — it is only used if a component reads the context but has
// no matching <Provider> above it in the tree.
import { createContext } from "react";

const UserContext = createContext();

// Export it so both the Provider (App) and the consumers (B, C) can
// import the SAME context object.
export default UserContext;
