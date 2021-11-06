const stripe = require('stripe')(process.env.SECRET_KEY);

const express = require("express");
const path = require("path");
const cors = require("cors");
const client = require("./db");
const md5 = require("md5");
const Stripe = require("stripe");



const app = express();
client.connect(); //Connects to the SQL database.


//middleware
app.use(cors());
app.use(express.json()); //req.body

const YOUR_DOMAIN = 'http://0.0.0.0:8000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

// app.listen(4242, () => console.log('Running on port 4242'));


// app.post("/payment-intent/create", async (req, res) => {
//   try {
//     const {number, cvv, exp_year, exp_month, email, amount, currency} = req.body;

//     const payment_method = await({
//       type: 'card',
//       card: {
//         exp_month: exp_month,
//         exp_year: exp_year,
//         number: number,
//         cvc: cvv
//       }
//     });

// //     console.log('payment_method', payment_method);

// //     // const customer = await stripe.customers.create({
// //     //   email: email,
// //     //   payment_method: payment_method.id,
// //     // });

// //     // console.log('customer', customer);

// //     // const paymentIntent = await stripe.paymentIntents.create({
// //     //   amount: amount,
// //     //   currency: currency,
// //     //   payment_method_types: ['card'],
// //     //   confirm: true,
// //     //   receipt_email: email,
// //     //   paymenth_method: payment_method.id,
// //     //   customer: customer.id
// //     // });

// //     // console.log('payment_intent', paymentIntent)
// //   } catch (err) {
// //     console.log('err', err);
// //   }
// // })

app.post("/signup", async (req, res) => {
  //async: wait for the function
  try {
    //mayybe change back to const
    const name = req.body.username;
    const password = md5(req.body.password); //Encrypted
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //Checks that pass and confirmpass in form are the same.
    if (req.body.password != req.body.confirm_password) { 
      res.send({ message: "Passwords do not match!" });
      return;
    }
    //Require passwords with at least 8 characters.
    if (req.body.password.length < 8) { 
      res.send({message: "Password must be more than 8 characters!"});
      return;
    }

    try {
      const post = await client.query(
        `INSERT INTO User_Info (username, user_first_name, user_last_name, user_password, user_email) VALUES('${name}', 
        '${firstName}', 
        '${lastName}' , 
        '${password}', 
        '${email}') RETURNING *`
      );
      res.send({ message: "Sign-Up Successful" });
    } catch (err) {
      //Account not made because a user with that username exists.
      res.send({ message: "Username already exists!" });
    }
  } catch (err) {
    console.log("Server Error!");
  }
});

app.post("/login", function (req, res) {
  let username = req.body.username;
  let password = md5(req.body.password); //encrypted
  let LoggedIn = false;

  //Below is the request sent to the SQL database.
  client.query(
    "Select * from user_info Where username='" +
      username +
      "' and user_password='" +
      password +
      "'",
    function (error, sqlinfo) {
      //console.log(rows);
      var size = Object.keys(sqlinfo["rows"]).length; //0 results means there is no such user with those credentials.

      if (size > 0) {
        LoggedIn = true; //The user exists.
        res.send({ message: "Login Successful!" });
      } else {
        LoggedIn = false; //The user with those credentials does not exist.
        res.send({ message: "Login Failed!" });
      }
    }
  );
});

//get all books
app.get("/books", async(req, res) =>{
  try{
    const allBooks = await client.query("SELECT * FROM books");
    // res.send({"books": "hi"});
    res.json(allBooks.rows);
  } catch (err){
    console.error(err.message);
  }
});

// * means it's going to serve any path the client request
app.use(express.static("../build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});


const PORT = process.env.PORT || 8000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);