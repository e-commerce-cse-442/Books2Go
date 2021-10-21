import React from "react";
import logo from "../images/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <Link to="/home">
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
              <Link to="/home" class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to = "/" class="nav-link" href="#">
                  Landing Page
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Free PDF Books
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cart
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
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
                Sign in
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
