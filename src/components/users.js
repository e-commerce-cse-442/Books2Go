import React from "react";
import ReactDOM from "react-dom";
import App from "../App";


ReactDOM.render(<App />, document.getElementById("root"));

const UsersPage = () => {
  return (
    <div>
      <ul>
        <h4>List Of users name</h4>
      </ul>
    </div>
  );
};

export default UsersPage;