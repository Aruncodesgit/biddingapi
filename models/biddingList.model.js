const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var biddingListSchema = new mongoose.Schema({  
    biddingNo: {
        type: Number 
    },  
    amount: {
        type: Number 
    }, 
    date: {
        type: String 
    }, 
    status: {
        type: String 
    },  
    tknAmount: {
        type: String 
    },  
    tknUser: {
        type: String 
    }, 
    roleType: {
        type: String 
    }, 
    amountInHand: {
        type: Number 
    },   
});
 
mongoose.model('BiddingList', biddingListSchema); 
 