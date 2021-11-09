import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from './components/Cart';
<<<<<<< HEAD
import PDFBooks from './components/PDFBooks';
import CheckoutForm from './components/ChecoutForm';
import ProcessingPayment from './components/ProcessingPayment'
=======



>>>>>>> 2063104d347de747f3f4ed62f06d6a9e9fab81f7
function Routing() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/" exact component={App} />
                    <Route path = "/shop" component={Shop} />
                    <Route path = "/login" component={Login} />
                    <Route path = "/signup" component={Signup} />
                    <Route path = "/cart" component={Cart} />
<<<<<<< HEAD
                    <Route path = "/pdfBook" component={PDFBooks} />
                    <Route path = "/Checkout" component={CheckoutForm} />
                    <Route path = "/Payment" component={ProcessingPayment} />
=======
>>>>>>> 2063104d347de747f3f4ed62f06d6a9e9fab81f7
                </Switch>
            </div>
        </Router>   
    )
}

export default Routing
