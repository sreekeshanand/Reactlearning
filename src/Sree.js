import React, { useState } from "react";
import "./App.css";
import Tweet from "./Tweet";
function Sree() {
  const [counter, setCounter] = useState(0);
  const [ischanged, setRed] = useState(false);

  const sayHello = () => {
        setCounter(counter + 1);
        setRed(!ischanged);
  };
  return (
    <div className="App">
      <h1 className={ischanged ? "Textchange": " "}>Sree learning React</h1>
      <Tweet name="Anand" /> <Tweet name="Sreekesh" /> <Tweet name="Kumar" />
      <Tweet name="Sree" />
      <button onClick={sayHello} >Hello</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default Sree;
