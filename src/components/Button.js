import React from "react";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Popup from "./Popup";
import Signup from "./Signup";
import Login from "./Login";

export default function Button() {
  const [LoginPopup, setLoginPopup] = useState(false);
  const [SignUpPopup, setSignUpPopup] = useState(false);

  return (
    <div class="container">
      <div class="row">
        <button class="black col">Home</button>

        {/* login  */}
        <button class="col blue" onClick={() => setLoginPopup(true)}>
          Login
        </button>

        <Popup trigger={LoginPopup} setTrigger={setLoginPopup}>
          <Login />
        </Popup>

        {/* Sign up */}

        <button class="orange col" onClick={() => setSignUpPopup(true)}>
          Sign Up
        </button>

        <Popup trigger={SignUpPopup} setTrigger={setSignUpPopup}>
          <Signup />
        </Popup>
      </div>
    </div>
  );
}

