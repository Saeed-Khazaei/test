import React, { useState } from "react";
import { IUseCounter } from "./useCounter.types";

const useCounter = ({ initialCount = 0 }: IUseCounter = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
