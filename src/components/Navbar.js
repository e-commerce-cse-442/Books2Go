import React from "react";
// import logo from "images/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';


function Navbar() {
  const [user, setUser] = useCookies(['user']);
  const [cart, setCart] = useCookies(['cart']);

  var name = user.userName
  if (name == undefined) {
    name = "Your";
  } else {
    name += "'s"
  }

  if (cart.cart == undefined) {
    cart.cart = {}
  }
  const cur_cart = cart.cart
  const change_input = async (event) => {
    if (name != "Your" && name != undefined) {
      try {
        const body = { name: user.userName, cart: cur_cart };
        const response = await fetch("/update_cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        // console.log(response)
        const data = await response.json();
        console.log("Cart updated")
      } catch (err) {
        console.error(err.message);
      }
    }
  };



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <Link to="/shop">
            <img class="logo" src="images/Logo.png" alt="Logo" onClick={change_input} />
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
              {/*<Link to="/" class="nav-link" href="#">*/}
              {/*  Home <span class="sr-only">(current)</span>*/}
              {/*</Link>*/}
            </li>
            <li class="nav-item">
              <Link to = "/shop" class="nav-link" href="#" onClick={change_input}>
                  Shop
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/pdfBook" class="nav-link" href="#">
                PDF Books
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart"class="nav-link" href="#" onClick={change_input}>
                Cart
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link to="/signup" class="nav-link" href="#">
                Sign up
              </Link>
            </li>
            <li class="nav-item active">
              { cookies.userName ? <Link to="/shop" class="nav-link" href="#">
                {cookies.userName.toString()}
              </Link> :
              <Link to="/login" class="nav-link" href="#">
                Login
              </Link>}
            </li>
          </ul>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
