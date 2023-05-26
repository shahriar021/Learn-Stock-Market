const express = require('express')
const mdb = require('./DB')

const app = express()

const modb = require('./DB');
mdb();

app.get('/',(req,res)=>(
    res.send("hello shahriar")
))



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/api", require("./Routes/Userdata"));

app.listen(5000,(req,res)=>{
    console.log("server is running on port 5000")
})

