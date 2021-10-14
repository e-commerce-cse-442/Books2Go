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


const handleSignup = async(e) =>{
  e.preventDefault();
  try{
    const body = { username, password, email };
    const response = await fetch("http://0.0.0.0:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body)
  });

  console.log(response)

  } catch(err){
    console.error(err.message)
  }
}


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
          <form onSubmit={handleSignup}>
            <label>
              Email: <input type="email" name="email" 
              value ={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              Username: <input type="text" name="username" 
              value ={username} onChange={e => setUsername(e.target.value)}  />
            </label>
            <label>
              Password: <input type="password" name="password" 
              value ={password} onChange={e => setPassword(e.target.value)} />
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
