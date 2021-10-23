import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
  <Routing/>
</BrowserRouter>, document.getElementById("root"));


//below may help in fixing the "you need to enable javascript" in browser error
/*
App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

App.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
*/
