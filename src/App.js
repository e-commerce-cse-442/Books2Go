import React from "react";
import Product from "./components/Product";
import Button from "./components/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/Logo.png";

function HomeBackground() {
  return (
    <div className="cont">
      <img class="logo" src={logo} alt="Logo" />
      <h1 class="adv1"> Your Story Begins Here </h1>
<<<<<<< HEAD
      <h2 class="adv2"> Shop you collection of Books </h2>
=======
      <h2 class="adv2"> Shop our collection of Books </h2>
>>>>>>> 4c701aee4608c4520217d83da465dd60cdeaabfe
      <SearchBar />
      <Button />
    </div>
  );
}

function SearchBar() {
  return (
    <div class="form-outline searchbar">
      <input
        type="search"
        id="form1"
        class="form-control"
<<<<<<< HEAD
        placeholder="Search for the books you would like to buy"
=======
        placeholder="Search for book title"
>>>>>>> 4c701aee4608c4520217d83da465dd60cdeaabfe
        aria-label="Search"
      />
    </div>
  );
}

export default function App() {
  return (
    <div class="body">
      <HomeBackground />
      <Product />
    </div>
  );
}
