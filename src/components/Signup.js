import React from "react";
import "./Signup.css";
import { useState } from "react";



function Signup() {
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
  
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
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
              <button type="submit" class="btn btn-success btn-lg btn-block">
                Register Now
              </button>

              {/* <Popup trigger={LoginPopup} setTrigger={setLoginPopup}>
                <Login />
              </Popup> */}


            </div>
          </form>
          <div class="text-center">
            Already have an account? <a href="#">Sign in</a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Signup;
