import React, { useState } from "react";
import "./App.css";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import CounterContextProvider from "./CounterContext/CounterContext";

import img from "./Assets/Capture.PNG";
function App() {
  //// can do props drilling but we used useContext here.. the graph is here for better understanding...

  // const [counter, setcounter] = useState(0)
  // const increment = () => {
  //   setcounter(counter + 1);
  // };
  // const decrement = () => {
  //   setcounter(counter - 1);
  // };
  // const reset = () => {
  //   setcounter(0);
  // };

  return (
    <CounterContextProvider>
      <div className="flex">
        <div className="App">
          {/* <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <br /> */}
          {/* ********** Components Start ************* */}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
        <div className="imgcontainer">
          <img src={img} alt="graph" />
        </div>
      </div>
    </CounterContextProvider>
  );
}

export default App;
