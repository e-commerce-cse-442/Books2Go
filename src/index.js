import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
<<<<<<< HEAD
  <BrowserRouter>
  <Routing/>
  </BrowserRouter>
=======
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
>>>>>>> 2063104d347de747f3f4ed62f06d6a9e9fab81f7
  </CookiesProvider>,
  document.getElementById("root"));


//below may help in fixing the "you need to enable javascript" in browser error
/*
App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

App.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
*/