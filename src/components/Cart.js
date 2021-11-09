import React from 'react'
import Navbar from './Navbar'
import "./Cart.css"
import { useCookies } from 'react-cookie';

function Cart() {
  const [user, setUser] = useCookies(['user']);
  const [cart, setCart] = useCookies(['cart']);
  var name = user.userName
  if (name == undefined) {
    name = "Your";
  } else {
    name += "'s"
  }
  console.log(cart.cart)
  var total = 0

  if (cart.cart != undefined){
    for (const num of Object.values(cart.cart)) {
        total += num.quantity
    }
  }

  function render_cart() {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');

    var cartRowData = `
      <div class="cart-item cart-column">
          <span class="cart-item-title">${name}</span>
      </div>
      <span class="cart-price cart-column">${1}</span>
      <div class="cart-quantity cart-column">
        <span class="cart-quantity-input" type="number" value="${1}"></span>
      </div>`
    cartRow.innerHTML = cartRowData;

    var cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.append(cartRow);
  }

    return (
        <div>
            <Navbar />
            <div class="your-cart">
              <h1 class="cart-head">{name} Cart</h1>
              <span class= "item-count">({total} Items)</span>
            </div>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">Item</span>
                <span class="cart-price cart-header cart-column">Price</span>
                <span class="cart-quantity cart-header cart-column">Quantity</span>
            </div>

            <div class="cart-items">
                <script> {render_cart()} </script>

            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>

            <form action='../Checkout'>
            <button class="btn button-remove" type="button">REMOVE ALL</button>
            <button class="button-checkout">Checkout</button>
            </form>
        </div>
)}


export default Cart
