import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";


function Routing() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/" exact component={App} />
                    <Route path = "/home" component={Home} />
                    <Route path = "/login" component={Login} />
                    <Route path = "/signup" component={Signup} />
                </Switch>
            </div>
        </Router>   
    )
}

export default Routing
