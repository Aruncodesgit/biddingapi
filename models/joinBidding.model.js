const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    memberId: {
        type: String 
    } ,
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('JoinBidding', joinBidding); 
 