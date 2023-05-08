import React from "react";
import "./Status.css";

export default function Status(props) {
  return (
    <div className="container">
      {props.mood ? `기분이 ${props.mood}` : "아직 선택하지 않았어요!"}
    </div>
  );
}
