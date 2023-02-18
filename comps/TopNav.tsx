import LoginComponent from "./LoginComponent";
import { useState } from "react";

function TopNav() {
  return (
    <div className="navigation-tabs">
      <p>Micxy</p>
      <button className="login-button">Log In</button>
      <LoginComponent />
    </div>
  );
}
export default TopNav;
