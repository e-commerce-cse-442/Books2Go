import React from "react";
import "./Marketplace.css";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";
import book4 from "../images/book4.jpg";
import book5 from "../images/book5.jpg";
import book6 from "../images/book6.jpg";
import book7 from "../images/book7.jpg";
import book8 from "../images/book8.jpg";
import book9 from "../images/book9.jpg";
import book10 from "../images/book10.jpg";
import book11 from "../images/book11.jpg";
import book12 from "../images/book12.jpg";
import book13 from "../images/book13.jpg";

function Marketplace() {
  return (
    <div>
      <div class="container-fluid mt-5 mb-5">
        <div class="row g-2">
          <div class="col-md-3">
            <div class="t-products p-2">
              <h6 class="text-uppercase">Genres</h6>
              <div class="p-lists">
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Education</span> <span>10</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Fiction</span> <span>5</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Action</span> <span>0</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Comedy</span> <span>0</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Documentary</span> <span>0</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Drama</span> <span>0</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Muscial</span> <span>0</span>{" "}
                </div>
                <div class="d-flex justify-content-between mt-2">
                  {" "}
                  <span>Sports</span> <span>0</span>{" "}
                </div>
              </div>
            </div>
            <div class="processor p-2">
              <div class="heading d-flex justify-content-between align-items-center">
                <h6 class="text-uppercase">Education</h6> <span>--</span>
              </div>
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
                    Math{" "}
                  </label>{" "}
                </div>{" "}
                <span>3</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    "Computer Science"{" "}
                  </label>{" "}
                </div>{" "}
                <span>4</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
              
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Chemistry{" "}
                  </label>{" "}
                </div>{" "}
                <span>1</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
           
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Physics{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
        
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Biology{" "}
                  </label>{" "}
                </div>{" "}
                <span>2</span>
              </div>
            </div>
            <div class="brand p-2">
              <div class="heading d-flex justify-content-between align-items-center">
                <h6 class="text-uppercase">Fiction</h6> <span>--</span>
              </div>
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
                    Comic{" "}
                  </label>{" "}
                </div>{" "}
                <span>3</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
        
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Classics{" "}
                  </label>{" "}
                </div>{" "}
                <span>2</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
            
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Fantasy{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
         
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Horror{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
     
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Historical Fiction{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
            </div>
            <div class="type p-2 mb-2">
              <div class="heading d-flex justify-content-between align-items-center">
                <h6 class="text-uppercase">Sports</h6> <span>--</span>
              </div>
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
                    Football{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
       
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Cricket{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
           
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Rugby{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
            
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Volleyball{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="form-check">
                  {" "}
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
          
                  />{" "}
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Basketball{" "}
                  </label>{" "}
                </div>{" "}
                <span>0</span>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="row g-2">
              <div class="col-md-4">
                <div class="product py-4">
                  {" "}
                  <span class="off bg-success">-25% OFF</span>
                  <div class="text-center">
                    {" "}
                    <img src={book1} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Fundamentals of Python</h5> <span>$20</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  {" "}
                  <span class="off bg-warning">SALE</span>
                  <div class="text-center">
                    {" "}
                    <img src={book2} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Algorithm Design </h5> <span>$20</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  <div class="text-center">
                    {" "}
                    <img src={book3} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>How to win friends & influence people</h5>{" "}
                    <span>$20</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  {" "}
                  <span class="off bg-success">-10% OFF</span>
                  <div class="text-center">
                    {" "}
                    <img src={book4} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Think and grow rich</h5> <span>$20</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  <div class="text-center">
                    {" "}
                    <img src={book5} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>The Hobbit</h5> <span>$12</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  {" "}
                  <span class="off bg-success">-5% OFF</span>
                  <div class="text-center">
                    {" "}
                    <img src={book6} alt="" width="200" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>The Famous five</h5> <span>$20</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  {" "}
                  <span class="off bg-warning">SALE</span>
                  <div class="text-center">
                    {" "}
                    <img src={book7} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Practical Programming</h5> <span>$23</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  <div class="text-center">
                    {" "}
                    <img src={book13} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Oridinary Differential Equations</h5> <span>$5</span>
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
              <div class="col-md-4">
                <div class="product py-4">
                  <div class="text-center">
                    {" "}
                    <img src={book12} alt="" width="200" height="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Algebra 1</h5>{" "}
                    <span>$19</span>
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
              {/* <div class="col-md-4">
                <div class="product py-4">
                  <div class="text-center">
                    {" "}
                    <img src={book10} alt="" width="250" />{" "}
                  </div>
                  <div class="about text-center">
                    <h5>Compiler Design</h5> <span>$5</span>
                  </div>
                  <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                    {" "}
                    <button class="btn btn-primary text-uppercase">
                      Add to cart
                    </button>
                    <div class="add">
                      {" "}
                      <span class="product_fav">
                        <i class="fa fa-heart-o"></i>
                      </span>{" "}
                      <span class="product_fav">
                        <i class="fa fa-opencart"></i>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
