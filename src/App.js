import React, { useState, useEffect } from "react";
import "./styles.css";

import randomColor from "randomcolor";

export default function App() {
  const [showSubs, setShowSubs] = useState(false);
  return (
    <div className="App">
      <div>
        <h1>1.Transfer Use State</h1>
        <Parent showSubs={showSubs} setShowSubs={setShowSubs} />
      </div>
      <div>
        <h1>2.Use Effect + Use State</h1>
        <Hook01 />
      </div>
    </div>
  );
}

function Parent(props) {
  const { showSubs, setShowSubs } = props;

  return (
    <>
      <div>showSubs:{showSubs ? "true" : "false"}</div>
      <Child showSubs={showSubs} setShowSubs={setShowSubs} />
    </>
  );
}

function Child({ showSubs, setShowSubs }) {
  return <button onClick={() => setShowSubs(!showSubs)}>Show Subs</button>;
}

function Hook01() {
  const [count, setCount] = useState();

  const [color, setColor] = useState(null);
  useEffect(() => {
    if (count > 2) setColor(randomColor());
    console.log("effect...");
  }, [count]);

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
    </div>
  );
}
