const express = require('express')
const app = express()
const port = process.env.PORT
require('./dbconnect')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, ()=> {
    console.log(`server started at ${port}`)
})