import { useState } from "react";
import ButtonLists from "./Components/ButtonLists/ButtonLists";
import Status from "./Components/Status/Status";

export default function App() {
  const [currentMood, setCurrentMood] = useState("");
  return (
    <>
      <h1>오늘의 기분을 표현해주세요 🙃</h1>
      <ButtonLists mood={currentMood} onItemClick={setCurrentMood} />
      <Status mood={currentMood} />
    </>
  );
}
