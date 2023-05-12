import React from "react";
import styled from "styled-components";

// const ContentOne = styled.div`
//   margin: 40px;
// `;

// const ContentTwo = styled.div`
//   color: red;
// `;

// const ContentThree = styled(ContentTwo)`
//   border: 1px solid black;
// `;
const FirstBtn = styled.button`
   {
    @font-face {
      font-family: "Ansungtangmyun-Bold";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ansungtangmyun-Bold.woff2")
        format("woff2");
      font-weight: normal;
      font-style: normal;
    }
    font-family: "Ansungtangmyun-Bold";
    background-color: #fc730b;
    padding: 20px;
    font-size: 20px;
    border: 1px solid #cf472a;
    border-radius: 5px;
    box-shadow: 0 0 10px #cf472a;
    color: black;
  }
`;
const SecondBtn = styled(FirstBtn)`
   {
  }
`;
const ThirdBtn = styled(FirstBtn)`
   {
  }
`;
const FourthBtn = styled(FirstBtn)`
   {
  }
`;
const FifthBtn = styled.button`
   {
    background-color: #fff;
    padding: 20px;
    font-size: 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px black;
  }
`;
function App() {
  return (
    <div>
      <FirstBtn>안</FirstBtn>
      <SecondBtn>성</SecondBtn>
      <ThirdBtn>탕</ThirdBtn>
      <FourthBtn>면</FourthBtn>
      <FifthBtn>🍜</FifthBtn>
    </div>
  );
}

export default App;
