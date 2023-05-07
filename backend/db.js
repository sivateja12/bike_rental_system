const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://raj:sivateja@cluster0.ykv7bfm.mongodb.net/' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose