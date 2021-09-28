import React from 'react';
<<<<<<< HEAD
import Popup from './components/Popup';
import { useState } from 'react';
import './App.css'
=======
import './App.css';
import logo from './images/Logo.png';
>>>>>>> origin/developing

function HomeBackground(){
    return(
        <>
        <div className = "container">
            <img class = 'logo' src={logo} alt="Logo" />
            <h1 class = 'adv'> Your Story Begins Here </h1>
            <Button />
        </div>
        </>
    );
}

function Button() {
    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
        <div>
            <button class="black">
                Home
            </button>
            <button onClick={() => setButtonPopup(true)}>
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

            <button class="orange">
                Sign Up
            </button>
        </div> 
    );
}

export default function App() {
    return (
        <HomeBackground />
    );
}