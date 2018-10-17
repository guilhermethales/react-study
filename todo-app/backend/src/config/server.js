const express = require('express');
const config = {
  port: 3003
};
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(config.port, function() {
  console.log(`BACKEND is running on port ${config.port}`);
});