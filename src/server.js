const express = require('express');
const server = express();
const routes = require('./routes')

server.use(express.json())

server.use(routes)

server.listen(2525, () => {
    console.log('Server tá rodando na porta 2525!')
})