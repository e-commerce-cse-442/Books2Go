require('dotenv').config();
const express = require('express');

const app = express();

const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
