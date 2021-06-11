const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sherpurzilladb',
});

/*
    * Initial Route
    * Initial Route Tested

*/

module.exports.send = function(req, res){
    res.send({
        status: "Congress!",
        code: "0000"
    })
}


/*
    * Registration 
    * Registration Tested
*/
module.exports.registerForm = function(req, res){
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    const query = "INSERT INTO registration (name, email, phone, password) VALUES(?,?,?,?)";
    
    connection.query(query, [name, email, phone, password], (err, result)=>{

        if(!err){
            res.send({
                status: "Congress! Registered Successfully",
                code: "0000"
            })
        }else {
            res.send({
                status: "Ops! Registered Not Successful",
                code: "1111"
            })
        }
    })
    
}

/*
    * Login 
    * Login Tested
*/

module.exports.login = function(req, res){
    console.log(req.body)
    const emailPhone = req.body.name;
    const password = req.body.password;

    const query = "SELECT * FROM registration WHERE email=? AND password=?";
    
    connection.query(query, [emailPhone, password], (err, result)=>{

        if(!err){
            res.send({
                status: "You're logged in",
                code: "0000"
            })
        }else {
            res.send({
                status: "Ops! Something went wrong",
                code: "1111"
            })
        }
    })
    
}


