const express = require('express');
const path = require('path');
const server = express();
// Serve static files....
server.use(express.static(__dirname + '/dist'));

server.get('**', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

server.listen(process.env.PORT || 3000, (res) => {
  console.log('JSON Server is running on: http://localohost:3000');
});
