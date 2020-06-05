import { useState } from "react";

const useToggleState = (initialVal = false) => {
  const [state, setState] = useState(initialVal);
  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
};

export default useToggleState;
