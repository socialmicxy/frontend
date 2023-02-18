import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { IoMdClose } from "react-icons/io";

function LoginComponent() {
  useEffect(() => {}, []);

  return (
    <div className="login-box">
      <div className="login-component">
        <div className="title-of-compoent">
          <p>Login To Micxy</p>
          <div className="close-that">
            <IoMdClose />
          </div>
        </div>
        <div id="sign-in"></div>
      </div>
    </div>
  );
}
export default LoginComponent;
