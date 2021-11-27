import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import "./Cart.css"
import { useCookies } from 'react-cookie';

function Cart() {

    const [books, setBooks] = useState([]);
    const [booksData, setBooksData] = useState([]);
    const [bookPrice, setBookPrice] = useState([]);
    const [listing, setListing] = useState(false);
    const [cart, setCart] = useState(false);

    const [cookies, setCookie] = useCookies(['user']); //cookies stuff

    function totalPrice(){
        var holder = 0;
        for (var k = 0; k < bookPrice.length;k++){
            holder+=Number(bookPrice[k][1]);
        }
        return holder;
    }

    const listingPrice = async() =>{
        var holder = []
          for (var i = 0; i < booksData.length;i++){
              for (var j = 0; j < books.length; j++){
                  if (booksData[i].name === books[j]){
                      holder.push([booksData[i].name, booksData[i].price]);
                  }
              }
          }
        console.log(holder.length);

        setBookPrice(holder);
    }
    const listingBooks = async () => {
        try {
          const response = await fetch("/books");
          const data = await response.json();
    
          setBooksData(data);
          setListing(true);
          console.log("first");
          
        } catch (err) {
          console.log(err);
        }
      };
    const cartSetup = async () => {
        try {
          var holder = "";
          var arrHolder = [];
          const response = await fetch("/cartList");
          const data = await response.json();
          for(var i = 0; i<data.length; i++){
              if(data[i].username === cookies.userName){
                  holder = data[i].cart_list;
              }
          }
          arrHolder = holder.split(";");
          arrHolder.splice(-1);

          setBooks(arrHolder);
          setCart(true);
          console.log("second");
        } catch (err) {
          console.log(err);
        }
      };

    
    useEffect(() => {
        if(cart){
            listingPrice();
        }
        if(listing){
            cartSetup();
        }
        listingBooks();
    }, [listing, cart] );

    console.log("here" + bookPrice[0]);
    
    
    return (
        <div>
            <Navbar />

            
<div class="container bootstrap snippets bootdey">
    <div class="col-md-9 col-sm-8 content">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-info panel-shadow">
                    <div class="panel-heading">
                        <h3>
                        {cookies.userName}'s cart
                        </h3>
                    </div>
                    <div class="panel-body"> 
                        <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Book Title</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bookPrice.map((book) => (
                                <tr>
                                    <td><img src= {`images/${book[0]}.jpg`} alt="" height="35" weight="35" class="img-cart"/></td>
                                    {/* <td>
                                    <form class="form-inline">
                                        <input class="form-control" type="text" value="1"/>
                                        <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                        <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
                                    </form>
                                    </td> */}
                                    <td>{book[0]}</td>
                                    <td>{book[1]}</td>
                                </tr>

                                ))}

                                {/*  */}
                                <tr>
                                    <td colspan="6">&nbsp;</td>
                                </tr>
                                {/* <tr>
                                    <td colspan="4" class="text-right">Total Product</td>
                                    <td>$86.00</td>
                                </tr> */}
                                {/* <tr>
                                    <td colspan="4" class="text-right">Total Shipping</td>
                                    <td>$2.00</td>
                                </tr> */}
                                <tr>
                                    <td colspan="4" class="text-right"><strong>Total</strong></td>
                                    <td>{totalPrice()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                <form action='../Checkout'>
                    <button className="button-checkout">Checkout</button>
                </form>
            </div>
        </div>
    </div>
</div>



        </div>

    )
}

export default Cart
