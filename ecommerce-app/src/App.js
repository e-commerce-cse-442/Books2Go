import React from 'react';
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
        <div>
        <HomeBackground />
        <Products />
        </div>
    );
}