const express = require('express');
const path = require('path');
const cors = require("cors");
const client = require("./db");

const app = express();

client.connect();


app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('../public'));

//middleware

app.use(cors());
app.use(express.json()); //req.body

//create
app.post("/signup", async(req, res) =>{
    //async: wait for the function
    try{
        const name = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const post = await client.query(
            `INSERT INTO User_Info (username, user_first_name, user_last_name, user_password, user_email) VALUES('${name}', '${firstName}', '${lastName}' , '${password}', '${email}') RETURNING *`
        );
        res.json(post.rows[0]);
    
    } catch(err){
        console.error(err.message);
    }
});



const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
