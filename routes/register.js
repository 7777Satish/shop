const express = require('express');
const register = express.Router();

register.get('/',(req,res)=>{
    res.render('register');
})

register.post('/',(req,res)=>{
    res.redirect('/');
})

module.exports = register;