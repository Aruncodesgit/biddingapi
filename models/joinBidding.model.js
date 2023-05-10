const mongoose = require('mongoose');
 

var joinBidding = new mongoose.Schema({  
    id: {
        type: Number 
    } ,
    date : {
        type: Date,
        default: Date.now()
    },
});
 
mongoose.model('JoinBidding', joinBidding); 
 