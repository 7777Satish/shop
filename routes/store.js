const express = require("express");
const store = express.Router();

store.get('/',(req,res)=>{
    res.render('store');
})

module.exports = store;