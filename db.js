import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"auto-choice"
})

db.connect((err)=>{
    if(err) throw err;
    console.log("Database connection successful")
});

