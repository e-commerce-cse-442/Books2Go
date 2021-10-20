import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

function Routing() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/" exact component={App} />
                    <Route path = "/home" component={Home} />
                </Switch>
            </div>
        </Router>   
    )
}

export default Routing
