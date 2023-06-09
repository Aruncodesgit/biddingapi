const mongoose = require('mongoose'); 

var biddingStatusSchema = new mongoose.Schema({  
    status: {
        type: String 
    },  
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('BiddingStatus', biddingStatusSchema); 
 