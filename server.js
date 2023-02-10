const express = require("express");

// var cors = require("cors");
// const bodyParser = require('body-parser')


const app = express();

//   app.use(express.json());
//   app.use(cors());
//   app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
  
//   app.use("/", require("./routes"));


app.get('/cat',(req,res)=>{
    res.send('Bye')
})


app.listen(3000, () => {
    console.log("Server is running on", 3000);
});