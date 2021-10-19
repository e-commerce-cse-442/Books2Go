import React from "react";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Popup from "./Popup";

export default function Button() {
  const [LoginPopup, setLoginPopup] = useState(false);
  const [SignUpPopup, setSignUpPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const body = { username, firstName, lastName, password, email };
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  //below function will be activated when login form submitted
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password};
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),  //will need to get data from database and compare ithe username and pass if same; succes if same
      });

      if(response.status == 200){
        alert("login Successfull");
      }
      else{
        alert("login failed");
      }
      console.log(response);
    } catch (err) {
      console.log(err);   //had this as error in console when trying to log in //err says "request with GET/HEAD cannot have body"
    }
  };

  return (
    <div class="container">
      <div class="row">
        <button class="black col">Home</button>

        {/* login  */}
        <button class="col blue" onClick={() => setLoginPopup(true)}>
          Login
        </button>

        <Popup trigger={LoginPopup} setTrigger={setLoginPopup}>
        <body>
            <div class="signup-form">
              <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <p class="hint-text">
                  Login to sell or buy books.
                </p>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-success btn-lg btn-block"
                  >
                    Login Now
                  </button>
                </div>
              </form>
              <div class="text-center">
                Don't have account yet? <a href="#">Create an account</a>
              </div>
            </div>
          </body>
        </Popup>

        {/* Sign up */}

        <button class="orange col" onClick={() => setSignUpPopup(true)}>
          Sign Up
        </button>

        <Popup trigger={SignUpPopup} setTrigger={setSignUpPopup}>
          <body>
            <div class="signup-form">
              <form onSubmit={handleSignup}>
                <h2>Register</h2>
                <p class="hint-text">
                  Create your account. It's free and only takes a minute.
                </p>
                <div class="form-group">
                  <div class="row">
                    <div class="col">
                      {" "}
                      <input
                        type="text"
                        class="form-control"
                        name="first_name"
                        placeholder="First Name"
                        required="required"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        required="required"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required="required"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label class="form-check-label">
                    <input type="checkbox" required="required" /> I accept the{" "}
                    <a href="#">Terms of Use</a> &amp;{" "}
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-success btn-lg btn-block"
                  >
                    Register Now
                  </button>
                </div>
              </form>
              <div class="text-center">
                Already have an account? <a href="#">Sign in</a>
              </div>
            </div>
          </body>
        </Popup>
      </div>
    </div>
  );
}
