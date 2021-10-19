import React from "react";
import { useState, Fragment } from "react";
import "./Signup.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      const data = await response.json();
      alert(data.message);

      console.log(data.message);
    } catch (err) {
      console.log(err);   //had this as error in console when trying to log in //err says "request with GET/HEAD cannot have body"
    }
    
  };

  return (
    <div>
      <body>
        <div class="signup-form">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <p class="hint-text">Login to sell or buy books.</p>

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
              <button type="submit" class="btn btn-success btn-lg btn-block">
                Login Now
              </button>
            </div>
          </form>
          <div class="text-center">
            Don't have account yet? <a href="#">Create an account</a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
