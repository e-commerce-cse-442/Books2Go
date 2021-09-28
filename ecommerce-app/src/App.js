import React from 'react';
import Product from './components/Product';
import Button from './components/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/Logo.png';

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
            <Product />
        </div>
    );
}
