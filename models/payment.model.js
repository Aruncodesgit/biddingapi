const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var paymentSchema = new mongoose.Schema({  
    userName: {
        type: String 
    },
    month: {
        type: String ,
        required :true
    }, 
    amount: {
        type: Number 
    }, 
    paidBy: {
        type: String 
    },  
    status: {
        type: String 
    },
    date : {
        type: Date,
        default: Date.now()
    },
    user_id :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required :true
    },
    uniqueID :{
        type: String, 
        required :true,
        unique: true
    },
});
 
mongoose.model('Payment', paymentSchema); 
 