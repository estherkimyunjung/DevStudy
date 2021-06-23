import React, { useState } from "react";

function expensiveInitialState() {
  return 10;
}

const App = () => {
  const arr = useState(() => expensiveInitialState());
  return <div>Start</div>;
};

export default App;
