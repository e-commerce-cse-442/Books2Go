import React from 'react';
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