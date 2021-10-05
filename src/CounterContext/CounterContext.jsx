import { createContext, useState } from "react";

export const counterContext = createContext();

const CounterContextProvider = (props) => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };
  const value = { count, increment, decrement, reset };
  return (
    <counterContext.Provider value={value}>
      {props.children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
