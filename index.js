const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require("./routes/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", routes);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sherpurzilladb',
});

connection.connect((err)=>{
    if(!err){
        console.log('connected successfully');
    }else{
        console.log('Connection falied \n error : '+JSON.stringify(err, undefined, 2));
    }
});

app.listen(3000, () => console.log('port id ===> 300'));

//module.exports=connection

