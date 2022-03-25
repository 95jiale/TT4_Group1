const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.user(express.json());

INFO from database
const db = mysql.createConnection({
    // user:"root",
    // host:"localhost",
    // password:"password"
    // database: "LoginSystem"
})

app.post("/register", (req, res) =>{
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    db.query(...)
});


app.post("/login", (req, res) =>{
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    db.query(...)

});

app.listen(...)