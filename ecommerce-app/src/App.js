import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './images/Logo.png';
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book4 from './images/book4.jpg';

function HomeBackground(){
    return(
        <div className = "cont">
            <img class = 'logo' src={logo} alt="Logo" />
            <h1 class = 'adv1'> Your Story Begins Here </h1>
            <h2 class = 'adv2'> Shop you collection of Books </h2>
            <SearchBar />
            <Button />
        </div>
    );
}

function Products(){
    return (
        <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-3"> <span>Hottest Giveaways</span> <span class="custom-badge text-uppercase">See More</span> </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1">3 Days</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                        </div>
                        <div class="text-center"> <img src={book1} alt="" width="250"/> </div>
                        <div class="text-center">
                            <h5>Fundamentals of python</h5> <span class="text-success">$20 value</span>
                        </div>
                    </div>
                </div>
        <div class="col-md-4">
            <div class="card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1 text-primary">00:02:13</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                </div>
                <div class="text-center"> <img src= {book4} alt="" width="250"/> </div>
                <div class="text-center">
                    <h5>Think and grow rich</h5> <span class="text-success">$25 value</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1">2 Days</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                </div>
                <div class="text-center"> <img src={book2} alt="" width="250"/> </div>
                <div class="text-center">
                    <h5>Algorithm Design</h5> <span class="text-success">free</span>
                </div>
            </div>
        </div>
    </div>
</div>
        
    );
}

//export default images;

function Button() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div class = "container">
            <div class = "row">
            <button class="black col">
                Home
            </button>
            <button class = "col blue" onClick={() => setButtonPopup(true)}>
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

            <button class="orange col">
                Sign Up
            </button>
            </div> 
        </div>
    );
}

function SearchBar() {
  return (
    <div class="form-outline searchbar">
        <input type="search" id="form1" class="form-control" placeholder="Search for the books you would like to buy"
        aria-label="Search" />
    </div>
  );
}

export default function App() {
    return (
        <div class = 'body'>
            <HomeBackground />
            <Products />
        </div>
    );
}
