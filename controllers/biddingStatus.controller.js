const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;  
const BiddingStatus = mongoose.model('BiddingStatus');  

// post register
module.exports.biddingStatus = async (req, res, next) => { 
    var biddingStatus = new BiddingStatus();
    biddingStatus.status = req.body.status;  
    biddingStatus.save((err, doc) => {
            if (!err) { 
                res.send(doc); 
            } 
            
        }); 
       
}
  
module.exports.biddingStatusDetails = async (req, res, next) => {  
    BiddingStatus.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}
 
