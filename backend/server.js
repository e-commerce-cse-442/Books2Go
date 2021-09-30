const express = require('express');
const path = require('path')

const app = express();

const PORT = 8000;
const HOST = '0.0.0.0';



// app.get('/', (req, res) => {
//   let reqPath = path.join(__dirname, '../');
//
//   res.sendFile(path.join(reqPath + 'public/index.html'));
// });
//
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('../public'));
// app.use(express.static('../src'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
