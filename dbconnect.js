require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, 
                {useNewUrlParser :true, useUnifiedTopology: true, useCreateIndex: true}, 
                (err)=> {
    if (err) throw err;
    console.log('database connected.');
})