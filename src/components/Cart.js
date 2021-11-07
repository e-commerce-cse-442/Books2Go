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
            <button class="button-checkout">Checkout</button>
            </div>
    )
}

export default Cart
