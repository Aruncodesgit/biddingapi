const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    fullName: {
        type: String 
    } ,
    shortName: {
        type: String 
    }  
});
 
mongoose.model('JoinBidding', joinBidding); 
 