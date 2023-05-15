const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    fullName: {
        type: String 
    } ,
    shortName: {
        type: String 
    },
    user_id :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    uniqueID :{
        type: String, 
        required :true,
        unique: true
    },
});
 
mongoose.model('JoinBidding', joinBidding); 
 