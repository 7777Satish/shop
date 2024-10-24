const express = require('express');
const login = express.Router();

login.get('/',(req,res)=>{
    res.render('login');
});

login.post('/',(req,res)=>{
    res.redirect('/');
})

module.exports = login;