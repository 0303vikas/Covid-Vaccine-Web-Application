const express  = require('express');
const cors = require('cors');
require("dotenv").config();
const conn = require('./db/db');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
conn();

//Import Route
app.use('/users', require("./routes/user"));
app.use('/vaccines', require("./routes/vaccine"));
app.use('/users/test', require("./routes/testReport"));
app.use('/reports', require('./routes/pdfGenerator'));
app.use('/users/vaccines/certificates', require('./routes/certificates'));


module.exports = app;