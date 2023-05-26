const mongoose = require('mongoose');

const mongoURI =
  "mongodb+srv://shahriar:blogapp000@blogapp.rx8fmvu.mongodb.net/blogapp?retryWrites=true&w=majority";

const mdb = async()=>{

    mongoose.connect(mongoURI,async()=>{
        console.log("connected to mongodb");
    })
}  


module.exports = mdb;