import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Link } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

<<<<<<< HEAD
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
=======
//below may help in fixing the "you need to enable javascript" in browser error
/*
App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

App.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
*/
>>>>>>> 7c7fc96ddd0beac8ca43b6115153d26bdcb9e6c5
