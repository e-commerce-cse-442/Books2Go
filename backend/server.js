const express = require("express");
const path = require("path");
const cors = require("cors");
const client = require("./db");
const md5 = require("md5");

const app = express();
client.connect();

app.use(express.static("../build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

//middleware

app.use(cors());
app.use(express.json()); //req.body

//create
app.post("/signup", async (req, res) => {
  //async: wait for the function
  try {
    const name = req.body.username;
    const password = md5(req.body.password); //encrypted
    //console.log("this is the signup passs being sent: " + password) ;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    try {
      const post = await client.query(
        `INSERT INTO User_Info (username, user_first_name, user_last_name, user_password, user_email) VALUES('${name}', '${firstName}', '${lastName}' , '${password}', '${email}') RETURNING *`
      );
      res.send({ message: "Sign-Up Successful" });
    } catch (err) {
      res.send({ message: "Username Taken" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/login", function (req, res) {
  let username = req.body.username;
  let password = md5(req.body.password); //encrypted
  let LoggedIn = false;

  //console.log("this is the pass that will be sent to login db: " + password)

  client.query(
    "Select * from user_info Where username='" +
      username +
      "' and user_password='" +
      password +
      "'",
    function (error, sqlinfo) {
      //console.log(rows);
      var size = Object.keys(sqlinfo["rows"]).length; //0 is no user,

      if (size > 0) {
        //the user is valid
        LoggedIn = true;
        //console.log("the size of keys is : " + JSON.stringify(size)) ;
        console.log("LoggedIn is: " + LoggedIn);

        res.send({ message: "Login Successful!" });
      } else {
        //the user isn't valid
        LoggedIn = false;
        //console.log("LoggedIn is false");
        console.log("LoggedIn is: " + LoggedIn);
        res.send({ message: "Login Failed" });
      }
    }
  );
});

//pass in db is plaintext

const PORT = process.env.PORT || 8000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
