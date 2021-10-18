import React from "react";
import ReactDOM from "react-dom";
import App from "../App";


ReactDOM.render(<App />, document.getElementById("root"));

const NotFoundPage = () => {
    return (
        <div>
            <h3>404 not found/ welcome to the react product page</h3>
        </div>
    );
};

export default NotFoundPage;