import React from 'react';
import './Product.css';
import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book4 from '../images/book4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product(){
    return (
        <div class="container mt-5">
            <div class="d-flex justify-content-between align-items-center mb-3"> <span>Hottest Giveaways</span> <span class="custom-badge text-uppercase">See More</span> </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1">3 Days</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                        </div>
                        <div class="text-center"> <img src={book1} alt="" width="250"/> </div>
                        <div class="text-center">
                            <h5>Fundamentals of python</h5> <span class="text-success">$20 value</span>
                        </div>
                    </div>
                </div>
        <div class="col-md-4">
            <div class="card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1 text-primary">00:02:13</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                </div>
                <div class="text-center"> <img src= {book4} alt="" width="250"/> </div>
                <div class="text-center">
                    <h5>Think and grow rich</h5> <span class="text-success">$25 value</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row align-items-center time"> <i class="fa fa-clock-o"></i> <small class="ml-1">2 Days</small> </div> <img src="https://i.imgur.com/suuFVrQ.png" width="20" alt=""/>
                </div>
                <div class="text-center"> <img src={book2} alt="" width="250"/> </div>
                <div class="text-center">
                    <h5>Algorithm Design</h5> <span class="text-success">free</span>
                </div>
            </div>
        </div>
    </div>
</div>
        
    );
}

export default Product