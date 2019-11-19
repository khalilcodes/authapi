require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
require('./dbconnect')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req,res)=> {
    res.send("homepage /")
})

app.listen(port, ()=> {
    console.log(`server started at ${port}`)
})