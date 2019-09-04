const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.status(200).send('API running')
})

module.exports = server;