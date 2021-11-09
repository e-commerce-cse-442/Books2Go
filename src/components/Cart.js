<<<<<<< HEAD
import React from 'react'
import Navbar from './Navbar'
import "./Cart.css"
import { useCookies } from 'react-cookie';

function Cart() {


  const [cookies, setCookie] = useCookies(['user']);
    return (
        <div>
            <Navbar />
            <div class="your-cart">
              <h1 class="cart-head">{cookies.userName}'s Cart</h1>
              <span class= "item-count">(0 Items)</span>
            </div>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">Item</span>
                <span class="cart-price cart-header cart-column">Price</span>
                <span class="cart-quantity cart-header cart-column">Quantity</span>
            </div>
            <div class="cart-items"></div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>
            <form action='../Checkout'>
            <button class="button-checkout">Checkout</button>
            </form>
            </div>
=======
import React from 'react';
import Navbar from './Navbar';
import { useCookies } from 'react-cookie';

function Cart() {
    const [cookies, setCookie] = useCookies(['user']); //cookies stuff
    return (
        <div>
            <Navbar />

            <h1>{cookies.userName}</h1>
        </div>
>>>>>>> 2063104d347de747f3f4ed62f06d6a9e9fab81f7
    )
}

export default Cart
