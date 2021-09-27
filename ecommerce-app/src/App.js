import React from 'react';
import './App.css';
import logo from './images/Logo.png';

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
    return (
        <div>
            <button class="black">
                Home
            </button>
            <button>
                Login
            </button>
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