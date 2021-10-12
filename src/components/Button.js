import React from "react";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Button() {
  const [LoginPopup, setLoginPopup] = useState(false);
  const [SignUpPopup, setSignUpPopup] = useState(false);

  return (
    <div class="container">
      <div class="row">
        <button class="black col">Home</button>
        <button class="col blue" onClick={() => setLoginPopup(true)}>
          Login
        </button>

        <Popup trigger={LoginPopup} setTrigger={setLoginPopup}>
          <h2>Login</h2>
          <form>
            <label>
              Username: <input type="text" name="username" />
            </label>
            <label>
              Password: <input type="password" name="password" />
            </label>
            <button>
              Login
            </button>
          </form>
        </Popup>

        <button class="orange col" onClick={() => setSignUpPopup(true)} >Sign Up</button>
        <Popup trigger={SignUpPopup} setTrigger={setSignUpPopup}>
          <h2>SignUp</h2>
          <form>
            <label>
              Email: <input type="text" name="email" />
            </label>
            <label>
              Username: <input type="text" name="username" />
            </label>
            <label>
              Password: <input type="password" name="password" />
            </label>
            <button>
              Join Now
            </button>
          </form>
        </Popup>
      </div>
    </div>
  );
}
