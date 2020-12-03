import { useState } from "react";

const useCounter = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  const handleState = () => {
    setState((currentState) => currentState + 1);
  };

  const handleTriple = () => {
    handleState();
    handleState();
    handleState();
  };
  return [state, handleState, handleTriple];
};

export default useCounter;
