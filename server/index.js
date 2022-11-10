require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');

const app = express();

app.use(express.json());
//app.use(morgan('dev'));

app.use('/', router);

const port = 3000;

app.listen(port, console.log(`Listening on port: ${port}`));
