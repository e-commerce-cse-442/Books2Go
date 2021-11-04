import React from "react";
import logo from "../images/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import username from "./Login";


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <Link to="/shop">
            <img class="logo" src={logo} alt="Logo" />
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link to="/" class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to = "/shop" class="nav-link" href="#">
                  Shop
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Free PDF Books
              </a>
            </li>
            <li class="nav-item">
              <Link to="/cart"class="nav-link" href="#">
                Cart
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            {/*The below line is to welcome the user if logged in */}
            
            {(username != "") ? ( <div class="error">Hi, {username}! </div>) : ""}

            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link to="/signup" class="nav-link" href="#">
                Sign up
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/login" class="nav-link" href="#">
                Login
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
