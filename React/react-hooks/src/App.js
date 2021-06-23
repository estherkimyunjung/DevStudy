import React, { useState } from "react";

// function expensiveInitialState() {
//   return 10;
// }

const App = () => {
  // const [count, setCount] = useState(() => expensiveInitialState());
  // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 }); if call always in same time then make as an object otherwise, it is better to separate them.
  const [email, setEmail] = useState("");
  const [{ password, setPassword }] = useState("");
  return (
    <div>
      {/* <button
        // onClick={() => setCount((currentCount) => currentCount + 1)}
        onClick={() =>
          setCount((currentState) => ({
            // ...currentState, // count2: currentState.count2
            // count1: currentState.count1 + 1,
          }))
        }
      >
        +
      </button> */}
      {/* <div>count 1: {count1}</div>
        <div>count 2: {count2}</div> */}

      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default App;
