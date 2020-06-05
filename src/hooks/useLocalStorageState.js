import { useState, useEffect } from "react";

// intercepts useState and automatically sync localStorage
const useLocalStorageState = (key, defaultVal) => {
  // make a piece of state, based off of value in localStorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localStorage whenever state changes
  useEffect(() => {
    // (async () => {})(); // if need async operations
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
