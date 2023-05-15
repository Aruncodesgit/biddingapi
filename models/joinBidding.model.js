const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    fullName: {
        type: String 
    } ,
    shortName: {
        type: String 
    }, 
    uniqueID :{
        type: String, 
        required :true,
        unique: true
    },
});
 
mongoose.model('JoinBidding', joinBidding); 
 