import React, { useContext } from "react";
import { counterContext } from "../CounterContext/CounterContext";

const ComponentA = () => {
  const { count, increment, decrement, reset } = useContext(counterContext);

  return (
    <div>
      <p>Component A</p>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ComponentA;
