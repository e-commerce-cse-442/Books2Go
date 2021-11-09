import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import { useCookies } from 'react-cookie';



function Cart() {
    const [books, setBooks] = useState([]);

    const [cookies, setCookie] = useCookies(['user']); //cookies stuff
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
        } catch (err) {
          console.log(err);
        }
      };

    
    useEffect(() => {
        cartSetup();
    }, [] );

    console.log("here" + books);
    
    
    return (
        <div>
            <Navbar />

            <h1>{cookies.userName}'s cart</h1>
            {books.map((book) => (

                <li>{book}</li>

            ))}


        </div>
    )
}

export default Cart
