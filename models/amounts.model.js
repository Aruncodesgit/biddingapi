const mongoose = require('mongoose'); 

var amountsSchema = new mongoose.Schema({  
    amtHand: {
        type: Number 
    }, 
    userPayAmt: {
        type: Number 
    }, 
    date : {
        type: Date,
        default: Date.now()
    } 
});
 
mongoose.model('Amount', amountsSchema); 
 