const express = require("express")
const dotenv = require('dotenv');
const app = express();
const connect = require('./connection')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoriesRoute = require('./routes/categories')
const reactUserRoute = require('./routes/reactUsers')
const cors = require('cors')
const multer = require('multer')

app.use(cors())
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null, "images")
    },filename:(req,file,callback) => {
        callback(null, req.body.name);
    },
})  

//upload file in image storage

const upload = multer({storage: storage});

app.post('/api/upload', upload.single('file'),(req, res) => {
    res.status(200).json("File has been uploaded")
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoriesRoute)
app.use('/api/reactuser', reactUserRoute)

app.listen(port, () => {
    connect();
    console.log('Backed in connected to port: ', port)
})






