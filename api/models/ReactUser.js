const mongoose = require('mongoose')

const {model} = mongoose;

const reactSchema = new mongoose.Schema({
    react: {type: Number},
    username: {type: String,}
})

const reactModel = model('React', reactSchema)

module.exports = reactModel;