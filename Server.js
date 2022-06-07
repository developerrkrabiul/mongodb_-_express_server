const dotenv = require('dotenv').config();
const express = require("express");
const app = express();

// environment variables init
const PORT = process.env.SERVER_PORT;
const SERVER_AUTHOR = process.env.SERVER_AUTHOR;

// Request body init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// All api Routes here
app.use('/api/deves', require('./routes/Deves'));

app.listen(5050, () => console.log("My First Express Server is running"));