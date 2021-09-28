import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';
import './App.css';
import logo from './images/Logo.png';
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book3 from './images/book3.jpg';
import book4 from './images/book4.jpg';
import book5 from './images/book5.jpg';
import book6 from './images/book6.jpg';



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

function Products(){
    return (
        <div>
            <h1>Book Adds</h1>
                <img src={book1} alt=""/> 
                <img src={book2} alt=""/> 
                <img src={book3} alt=""/> 
                <img src={book4} alt=""/> 
                <img src={book5} alt=""/> 
                <img src={book6} alt=""/> 
        </div> 
    );
}

//export default images;

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
        <div>
        <HomeBackground />
        <Products />
        </div>
    );
}