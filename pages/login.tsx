import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import TopNav from "../comps/TopNav";
function Login() {
  useEffect(() => {}, []);

  function loginWithGoogle() {
    axios
      .post("/api/auth/login", { withCredentials: true })
      .then((result) => {});
  }

  return (
    <div className="landing-page">
      <TopNav />
    </div>
  );
}

export default Login;
