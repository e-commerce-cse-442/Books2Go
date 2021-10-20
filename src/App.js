import React from "react";
import Product from "./components/Product";
import Button from "./components/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/Logo.png";
import { Link } from "react-router-dom";

function HomeBackground() {
  return (
    <div className="cont">
      <Link to='/home'>
        <img class="logo" src={logo} alt="Logo" />
      </Link>
      <h1 class="adv1"> Your Story Begins Here </h1>
      <h2 class="adv2"> Shop our collection of Books </h2>
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
        placeholder="Search for book title"
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
