const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var biddingTempSchema = new mongoose.Schema({  
    chitNo: {
        type: Number 
    },  
    name: {
        type: String 
    }, 
    role: {
        type: String 
    }, 
    amount: {
        type: Number 
    }, 
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('BiddingTemp', biddingTempSchema); 
 