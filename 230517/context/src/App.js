import React from "react";
import UserInfoContext from "./components/UserInfoContext";
import { createContext } from "react";
import HelloLicat from "./components/HelloLicat";

const UserInfo = createContext();

function App() {
  return (
    <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
}

export { UserInfo, App };
