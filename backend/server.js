const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

console.log("DATABASE URL IS PRINTING: ", process.env.DATABASE_URL)
console.log("PROCESS PORT: ", process.env.PORT)

client.query('SELECT *, * FROM User_Info;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

console.log(path.join(__dirname, "..", "build"));
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static('../public'));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
