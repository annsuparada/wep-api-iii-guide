const express = require('express');
const server = express();
const productsRouter = require('../product/productsRouter')
const suppliersRouter = require('../suppliers/suppliersRouter');

server.use(express.json())
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

server.get('/', (req, res) => {
    res.status(200).send('API running')
})

server.get('/clients', (req, res) => {
   
})

module.exports = server;