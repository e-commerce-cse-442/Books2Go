import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';
import './App.css'

function HomeBackground(){
    return(
        <>
        <div className = "container">
            <h1 class = "header">Books2Go</h1>
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