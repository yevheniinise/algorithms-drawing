const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT || 80);

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
