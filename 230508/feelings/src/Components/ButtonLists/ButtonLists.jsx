import React from "react";
import Button from "../Button/Button";
import "./ButtonLists.css";

export default function ButtonLists(props) {
  const btns = ["좋아요!😁", "정말 좋아요!😄", "최고에요!🤩", "미쳤어요!!🤪"];

  return (
    <ul className="container-list">
      {btns.map((moodEl) => {
        // mood: 기분의 텍스트, isSelected: 현재 사용자의 기분이 맞는지 전달, props.onItemEvt: 현재 기분을 변경하는 함수
        return (
          <Button
            mood={moodEl}
            isSelected={props.mood === moodEl}
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </ul>
  );
}
