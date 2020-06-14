// express body parser mongoose 

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//route
const usersRoute = require('./routes/users');

// mongoose connection 
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, ()=> console.log('MONGODB CONNECTED!'))

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/users', usersRoute );


app.listen(3000, ()=> console.log('running on PORT 3000! '))