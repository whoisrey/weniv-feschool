import React from "react";
import styled from "styled-components";
import {
  FirstBtn,
  SecondBtn,
  ThirdBtn,
  FourthBtn,
  FifthBtn,
} from "./components/Buttons";

export default function App6() {
  const Button = styled.button`
    background-color: royalblue;
    padding: 10px;
    color: #fff;
  `;

  const ButtonStyle2 = styled(Button)`
    color: #000;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    box-shadow: 0 0 2 2 rgba(0, 0, 0, 0.3);
  `;

  const ButtonStyle3 = styled(Button)`
    color: yellow;
    width: 100px;
    background-color: lightgreen;
  `;

  const ButtonStyle4 = styled(ButtonStyle2)`
    border-radius: 20px;
    color: #fff;
    background-color: hotpink;
  `;

  return (
    <div>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼3</ButtonStyle3>
      <ButtonStyle4>버튼4</ButtonStyle4>
    </div>
  );
}
