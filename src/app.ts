const http = require('http');
const express = require('express');
import * as animalsRoute from './routes/animals';
const sequelize = require('./database/database');
const bodyParser = require('body-parser');

const app = express();
 
const hostname = "127.0.0.1"
const port = "3000";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("port",port);

app.use('/api',animalsRoute)

app.use((req,res)=>{
    res.status(404).send();            
});

const server = http.createServer(app);

server.listen(port,hostname, () =>{
    console.log('servidor rodando na porta 3000');    
    sequelize.sync();
});