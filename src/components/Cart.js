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
  console.log(cart.cart);
  console.log(Object.keys(cart))
  console.log(Object.keys(cart.cart))
  console.log(Object.keys(cart.cart).map((item, i) => (i)))
  var total = 0
  var book_name = ""

  if (cart.cart != undefined){
    for (const num of Object.values(cart.cart)) {
        total += num.quantity

    }
    for (const num of Object.keys(cart.cart)) {
      book_name = num
      console.log("book names: ", num)
    }
  }


  function render_cart() {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');

    var cartRowData = `
      <div class="cart-item cart-column">
          <span class="cart-item-title">${book_name}</span>
      </div>
      <span class="cart-price cart-column">${1}</span>
      <div class="cart-quantity cart-column">
        <span class="cart-quantity-input" type="number" value="${1}"></span>
      </div>`
    cartRow.innerHTML = cartRowData;

    // console.log(cartRow.innerHTML);
    console.log("cart row data", cartRow);

    // document.getElementsByClassName('cart-items')[0].appendChild(cartRow);

    // document.body.appendChild(cartRow);\


    // var cartItems = document.getElementsByClassName('cart-items')[0];
    // console.log(typeof cartItems);
    // console.log(cartItems);
    // cartItems.appendChild(cartRow);
    // console.log(cartItems);


    // cartItems.insertBefore(cartRow, null)
    // console.log(cartItems.innerHTML)
    //
    // console.log('CART ITEMS', cartItems);
    // cartItems.append(cartRow);
    // document.body.insertBefore(cartRow, cartItems);
  }
  // document.body.onload(render_cart());

    return (
        <div>
            <Navbar />
            <div class="your-cart">
              <h1 class="cart-head">{name} Cart</h1>
              <span class= "item-count">({total} Items)</span>
            </div>
            <div style={{marginLeft:25 + 'px'}}>
              <table class= "book-table">
                <thead>
                  <tr>
                    <th class="item-header">Item</th>
                    <th class="price-header">Price</th>
                    <th class="quantity-header">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(cart.cart).map(function (key, index) {
                      return(
                        <tr>
                          <td>{key}</td>
                          <td>{cart.cart[key]["price"]}</td>
                          <td>
                            <form action="/quantity-change">
                              <input type="number" id="quantity" name="quantity" min="1" value={cart.cart[key]["quantity"]}></input>
                              <button class= "remove-btn" type="button">REMOVE</button>
                            </form>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>
            <form action='../Checkout'>
            <button class="button-checkout">Checkout</button>
            </form>
        </div>
)}


export default Cart
