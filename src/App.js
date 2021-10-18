import React from "react";
import Product from "./components/Product";
import Button from "./components/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/Logo.png";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from  "react-router-dom";
import { component } from "react";
import "./App.css";

import {
 // BrowserRouter as Router,
 // Route,
 // Switch,
//  Link,
 // Redirect,
} from "react-router-dom";

//Pages
import AllProducts from "./components/HomeProducts";
import NotFoundPage from "./components/404";
import UserPage from "./components/users"

class App extends component {
  render() {
    return <Router>
      <Switch>
      <Router exact Path="/HomeProducts"Component={AllProducts} />
      <Route exact path="/404"component={NotFoundPage}/>
      <Route exact path="/users"component={UserPage}/>

      <Redirect to="/404"/> 

      </Switch>
    </Router>
  }
}


function HomeBackground() {
  return (
    <div className="cont">
      <img class="logo" src={logo} alt="Logo" />
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

function Applm() {
  return (
    <div class="body">
      <HomeBackground />
      <Product />
    </div>
  );
}

export default Applm;
