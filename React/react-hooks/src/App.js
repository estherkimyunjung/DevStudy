import React, { useState } from "react";

function expensiveInitialState() {
  return 10;
}

const App = () => {
  const [count, setCount] = useState(() => expensiveInitialState());
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> + </button>
      <div>{count}</div>
    </div>
  );
};

export default App;
