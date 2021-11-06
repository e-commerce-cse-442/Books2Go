import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from './components/Cart';
import PDFBooks from './components/PDFBooks';
import Checkout from './components/Checkout';


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
                    <Route path = "/pdfBook" component={PDFBooks} />
                    <Route path = "/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>   
    )
}

export default Routing
