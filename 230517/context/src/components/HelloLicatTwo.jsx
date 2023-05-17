import React from "react";
import { UserInfo } from "../App";
import UserInfoContext from "./UserInfoContext";

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

export default HelloLicatTwo;
