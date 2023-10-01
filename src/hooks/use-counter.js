import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCount) => prevCount + 1);
      } else {
        setCounter((prevCount) => prevCount - 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [forwards, counter]);
  return counter;
};

export default useCounter;
