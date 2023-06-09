const express = require("express")
const dotenv = require('dotenv');
const app = express();
const connect = require('./connection')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

app.listen(port, () => {
    connect();
    console.log('Backed in connected to port: ', port)
})






