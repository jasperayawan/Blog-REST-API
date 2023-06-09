const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('connected to mongodb...')
    }
    catch(err){
        console.log('error')
    }
}

module.exports = connect;