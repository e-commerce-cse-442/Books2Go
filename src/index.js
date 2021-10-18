import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Link } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

const Productpage = () => {
    return (
        <div>
            <h3>welcome to the react product page</h3>
            <small>Productpage</small>
            <Link to="/user">Show List of User</Link>
        </div>
    );
};

export default Productpage;