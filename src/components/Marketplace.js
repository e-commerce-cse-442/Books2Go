import React, { useEffect, useState } from "react";
import "./Marketplace.css";
import { useCookies } from 'react-cookie';


function Marketplace() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [subGenres, setSubGenres] = useState([]);
  const [bookData, setBookData] = useState(false);
  const [genreData, setGenreData] = useState(false);
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(['cart']); //cookies stuff
  const listingBooks = async () => {
    try {
      const response = await fetch("/books");
      const data = await response.json();

      setBooks(data);
    } catch (err) {
      console.log(err);
    }
    setBookData(true);
  };

  const listingGenre = async () => {
    var genreList = [];
    var holdingList = [];
    for (var i = 0; i < books.length; i++){
      if (holdingList.includes(books[i].genre) === false){
        holdingList.push(books[i].genre)
        genreList.push([books[i].genre, 1])
      }
      else{
        for( var j = 0; j < genreList.length; j++ ){
          if(genreList[j][0] === books[i].genre){
            genreList[j][1] = genreList[j][1] + 1;
          }
        }
      }
    }
    setGenres(genreList);
    setGenreData(true);
  }
  const listingSubGenre = async () => {
    var subGenreList = [];
    var exploredList = [];
    for( var k = 0; k < books.length; k++){
      if(!exploredList.includes(books[k].sub_genre)){
        subGenreList.push([books[k].genre, books[k].sub_genre,1]);
        exploredList.push(books[k].sub_genre);
      }
      else{
        for( var j = 0; j < subGenreList.length; j++ ){
          if(subGenreList[j][1] === books[k].sub_genre){
            // console.log(subGenreList[j][1]);
            subGenreList[j][2] = subGenreList[j][2] + 1;
          }
        }
      }
    }
    setSubGenres(subGenreList);
  }

  //need to change it

  function helperforGen(gen, subGen){
    if(gen[0] === subGen[0]){
      return subGen[1];
    }
    // else{
    //   return fakeData[iteration] ;
    // }
  }

  function helperforNum(gen, subGen){
    if(gen[0] === subGen[0]){
      return subGen[2];
    }
    else{
      return 0;
    }
  }

  // function breakHelper(gen, subGen){
  //   if(gen[0] === subGen[0]){
  //     break;
  //   }
  // }

  useEffect(() => {
    listingBooks();
    if (bookData === true){
      listingGenre();
    }
    // if (genreData === true){
    //   listingSubGenre();
    // }
  }, [bookData, genreData] );


  const addToCart = (book_data) => {
      // console.log(book_data);
      // console.log(book_data.name);
      // console.log(book_data.price);
      console.log(cart)
      if (cart.hasOwnProperty(book_data.name)){
        // console.log("update")
        const updatedQuantity = {}
        updatedQuantity[book_data.name] = {"quantity": cart[book_data.name].quantity + 1, "price": book_data.price}
        setCart({...cart, ...updatedQuantity})
      } else {
        // console.log("new")
        const updatedQuantity = {}
        updatedQuantity[book_data.name] = {"quantity": 1, "price": book_data.price}
        // updateQuantity[book_data.]
        setCart({...cart, ...updatedQuantity})
      }

      // if (cookies.cart == undefined){
      //   cookies.cart = cart[book_data.name]
      // }

        // cart[book_data.name].quantity = values[book_data.name].quantity + cart[book_data.name].quantity
        // setCookie('cart', cart, { path: '/' , sameSite: 'strict'});
        // console.log("COOKIES CART", cookies.cart)
        // if (cookies.cart[book_data.name] == undefined){
        //   cookies.cart[book_data.name] = cart[book_data.name];
        // } else {
        //   cookies.cart[book_data.name].quantity = cart[book_data.name].quantity;
        // }

        // setCookie('cart', cookies, { path: '/' , sameSite: 'strict'});

      // console.log("COOKIES: ", cookies)
      // console.log(cookies.cart)
      setCookie('cart', cart, { path: '/' , sameSite: 'strict'});
  }


  return (

    <div>
      <div class="container-fluid mt-5 mb-5">
        <div class="row g-2">
          <div class="col-md-3">
            <div class="t-products p-2">
              <h6 class="text-uppercase">Genres</h6>

              {/* rendering genre starts here */}

              {genres.map((genre) => (

                <div class="p-lists">
                  <div class="d-flex justify-content-between mt-2">
                    {" "}
                    <span>{genre[0]}</span> <span>{genre[1]}</span>{" "}
                    </div>
                </div>
              ))}
            </div>
            {/* rendering genre ends here */}


            {/* filtering starts*/}

            <div class="processor p-2">
              <div class="heading d-flex justify-content-between align-items-center">
                <h6 class="text-uppercase">Filter</h6> <span>--</span>
              </div>

              {/* loop through length */}

              {genres.map((genre) => (
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check" >
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />{" "}
                  <label class="form-check-label" for="flexCheckDefault">
                    {" "}
                    {/* need to have an if condition */}
                    {genre[0]}

                    {" "}
                  </label>{" "}
                </div>{" "}
                <span>{genre[1]}</span>
              </div>

          ))}
          </div>

          </div>
          {/* filtering stuff ends here*/}


          <div class="col-md-9">
            <div class="row g-2">
              {/* work start here */}

                {books.map((book) => (

                  <div class="col-md-4 book-data" data-book-id="<%= book.id %>">

                    <div class="product py-4">
                      {" "}
                      {/* <span class="off bg-success">-25% OFF</span> */}
                      <div class="text-center">
                        {" "}
                        <img
                          class= "book-image"
                          src= {`images/${book.name}.jpg`}
                          alt=""
                          width="200"
                          height="250"
                        />{" "}
                      </div>
                      <div class="about text-center">
                        <span class="book-name">{book.name}</span> <span class="book-price">{`$${book.price}`}</span>
                      </div>
                      <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                        {" "}
                        <button class="btn btn-primary text-uppercase">
                          Buy Now
                        </button>
                        <button onClick={() => addToCart(book)} class="btn btn-primary text-uppercase add-to-cart-btn">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              {/* end here */}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Marketplace;
