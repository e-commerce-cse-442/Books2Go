import React, { useEffect, useState } from "react";
import "./Marketplace.css";


function Marketplace() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const listingBooks = async () => {
    try {
      const response = await fetch("/books");
      const data = await response.json();

      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listingBooks();
  }, []);
  

  const listingGenre = () =>{
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
  }
  useEffect(() => {
    listingGenre();
  });
  

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
            {genres.map((genre) => (
            <div class="processor p-2">
              <div class="heading d-flex justify-content-between align-items-center">
                <h6 class="text-uppercase">{genre[0]}</h6> <span>--</span>
              </div>

              {/* loop through length */}

              {Array.apply(null, Array(genre[1])).map((i) => (
  
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />{" "}
                  <label class="form-check-label" for="flexCheckDefault">
                    {" "}
                    {/* implementation to left */}
                    math
                    {" "}
                  </label>{" "}
                </div>{" "}
                <span>3</span>
              </div>
              ))}
          </div>
          ))}
          </div>
          {/* filtering stuff ends here*/}


          <div class="col-md-9">
            <div class="row g-2">
              {/* work start here */}
                {books.map((book) => (
                  <div class="col-md-4">
                    <div class="product py-4">
                      {" "}
                      {/* <span class="off bg-success">-25% OFF</span> */}
                      <div class="text-center">
                        {" "}
                        <img 
                          src= {`images/${book.name}.jpg`}
                          alt=""
                          width="200"
                          height="250"
                        />{" "}
                      </div>
                      <div class="about text-center">
                        <h5>{book.name}</h5> <span>{`$${book.price}`}</span>
                      </div>
                      <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                        {" "}
                        <button class="btn btn-primary text-uppercase">
                          Buy Now
                        </button>
                        <button class="btn btn-primary text-uppercase">
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
