import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    // 리액트 상태 설명을 위한 예시
    // setCount((preCount) => preCount + 1);
  }
  function decrement() {
    setCount(count - 1);
    // 리액트 상태 설명을 위한 예시
    // setCount((preCount) => preCount - 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
