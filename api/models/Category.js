const mongoose = require('mongoose')

const {model} = mongoose;

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true}
},{
    timestamps: true
})

const categoryModel = model('Category', categorySchema)

module.exports = categoryModel; 