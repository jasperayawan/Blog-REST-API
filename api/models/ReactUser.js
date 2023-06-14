const mongoose = require('mongoose')

const {model} = mongoose;

const reactSchema = new mongoose.Schema({
    react: {type: Array},
    username: {type: String,}
})

const reactModel = model('React', reactSchema)

module.exports = reactModel;