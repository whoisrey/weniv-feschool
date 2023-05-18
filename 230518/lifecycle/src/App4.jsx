import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div
        style={{
          width: value,
          height: value,
          backgroundColor: "blue",
          transition: "1s all",
        }}
      ></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;

// 깜빡거리는 순서
// 1. 커져라 버튼을 클릭한다. setValue 가 실행되면서 상태값을 변경한다.
// 2. Value 값이 수정되면서 컴포넌트를 재랜더링한다. 연결된 파란 상자의 스타일이 변경된다.
// 3. 랜더링이 끝나고 Value 값이 변한것을 감지한 useEffect 가 실행된다.
// 4. setValue 가 실행되면서 상태값을 또 변경한다.
// 5. 컴포넌트가 재랜더링 되면서 파란상자의 스타일이 변경된다.

// 1. useLayoutEffect는 useEffect보다 먼저 실행됩니다. 따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있습니다.

// 2.
// 2.1 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행됩니다. 그리고 useLayoutEffect 가 실행됩니다.
// 2.2 useEffect return의 콜백함수가 실행됩니다. useEffect 가 실행됩니다.

// 3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect
