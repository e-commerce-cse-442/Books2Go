const express = require('express');
const path = require('path')

const app = express();

console.log(path.join(__dirname, "..", "build"));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('../public'));



const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
