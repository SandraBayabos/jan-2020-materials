import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [clickCount, setClickCount] = useState(10);

  return (
    <div className="App">
      <h1>
        You have clicked {clickCount} time{clickCount === 1 ? "" : "s"}!
      </h1>
      <button onClick={() => setClickCount(clickCount + 1)}>Click Me</button>
    </div>
  );
};

export default App;
