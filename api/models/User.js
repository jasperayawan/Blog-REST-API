const mongoose = require('mongoose')

const {model} = mongoose;

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String,required: true, unique: true},
    password: {type: String,required: true},
    profilePic: {type: String,default: ""},
},{
    timestamps: true
})

const userModel = model('User', userSchema)

module.exports = userModel;