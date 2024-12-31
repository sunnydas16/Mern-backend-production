const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to DB");
    })
}

module.exports = connectToDB



//in dot env file MONGO_URI=mongodb://0.0.0.0/dbname
