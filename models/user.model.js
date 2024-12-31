const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require:true,
        trim: true,
        unique:true,
        lowercase: true,
        minlength: [3, "min length at least 3 char long"]
    },
    email: {
        type:String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, "enter valid email id "]
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: [5, "enter 5 char long"]
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user