const mongoose = require('mongoose')

const {model} = mongoose;

const reactSchema = new mongoose.Schema({
    react: {type: Array, required: false},
    username: {type: String, required: true}
})

const reactModel = model('React', reactSchema)

module.exports = reactModel;