const dotenv =require('dotenv');
const mongoose = require('mongoose'); 
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;
require('./db/conn');
app.use(express.json());
//const User=require('./model/userSchema');
//middelware
//we link the router file
app.use(require('./router/auth'));

app.get('/',(req,res)=>{
        res.send('Hello world');
});

app.get('/about', (req,res) =>{
    res.send('Hello  about world');
});
app.get('/contact',(req,res)=>{
    //res.cookie("Test",subu,))
    res.send('Hello  contact world');
});
app.get('/login',(req,res)=>{
    res.send('Hello login world');
});
app.get('/register',(req,res)=>{
    res.send('Hello register world');
});
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});