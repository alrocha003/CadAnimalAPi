"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const express = require('express');
const animalsRoute = require("./routes/animals");
const sequelize = require('./database/database');
const bodyParser = require('body-parser');
const app = express();
const hostname = "127.0.0.1";
const port = "3000";
app.set("port", port);
app.use('/api', animalsRoute);
app.use((req, res) => {
    res.status(404).send();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log('servidor rodando na porta 3000');
    sequelize.sync();
});
