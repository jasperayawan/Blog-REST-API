const mongoose = require('mongoose')

const {model} = mongoose;

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    photo: {type: String, required: true},
    username: {type: String, required: true},
    categories: {type: Array, required: false},
},{
    timestamps: true
})

const postModel = model('Post', postSchema)

module.exports = postModel; 