const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var biddingSchema = new mongoose.Schema({  
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
        type: Number ,
        required:true
    }, 
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('Bidding', biddingSchema); 
 