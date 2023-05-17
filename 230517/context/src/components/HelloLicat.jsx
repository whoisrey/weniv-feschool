import React from "react";
import UserInfoContext from "./UserInfoContext";
import { createContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";
import { UserInfo } from "../App";

function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
            <HelloLicatTwo />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}

export default HelloLicat;
