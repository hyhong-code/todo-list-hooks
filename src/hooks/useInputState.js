import { useState } from "react";

const useInputState = (initialVal) => {
  const [input, setInput] = useState(initialVal);

  const updateInput = (evt) => {
    setInput(evt.target.value);
  };

  const resetInput = () => {
    setInput("");
  };

  return [input, updateInput, resetInput];
};

export default useInputState;
