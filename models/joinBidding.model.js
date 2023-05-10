const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    fullName: {
        type: String 
    } ,
    shortName: {
        type: String 
    } ,
    user_id :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required :true
    },
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('JoinBidding', joinBidding); 
 