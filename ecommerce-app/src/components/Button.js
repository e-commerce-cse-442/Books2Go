import React from "react";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Button() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div class="container">
      <div class="row">
        <button class="black col">Home</button>
        <button class="col blue" onClick={() => setButtonPopup(true)}>
          Login
        </button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>Login</h2>
          <form>
            <label>
              Username: <input type="text" name="username" />
            </label>
            <label>
              Password: <input type="password" name="password" />
            </label>
          </form>
        </Popup>

        <button class="orange col">Sign Up</button>
      </div>
    </div>
  );
}
