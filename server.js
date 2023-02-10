const express = require("express");
const bodyParser = require('body-parser');
const mysql = require("mysql");

require("dotenv").config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
  
//   app.use("/", require("./routes"));

const db = mysql.createConnection({
    host:"localhost",
    user:"auto-choice",
    password:"1234",
    database:"auto-choice"
})

db.connect((err)=>{
    if(err) throw err;
    console.log("Database connection successful")
});

app.get('/cat',(req,res)=>{
    let sql = 'SELECT * from garage';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on", process.env.PORT);
});