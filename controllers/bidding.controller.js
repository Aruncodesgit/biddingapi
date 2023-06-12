const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID; 
const Bidding = mongoose.model('Bidding'); 
const BiddingTemp = mongoose.model('BiddingTemp'); 
var db = mongoose.connection;

// post register
module.exports.bidding = async (req, res, next) => { 
    var bidding = new Bidding();
    bidding.chitNo = req.body.chitNo;  
    bidding.name = req.body.name; 
    bidding.role = req.body.role;  
    bidding.amount = req.body.amount;  
    bidding.save((err, doc) => {
            if (!err) { 
                res.send(doc); 
            } 
            
        }); 
       
}
 

module.exports.biddingTemp = async (req, res, next) => { 
    var biddingTemp = new BiddingTemp();
    biddingTemp.chitNo = req.body.chitNo;  
    biddingTemp.name = req.body.name; 
    biddingTemp.role = req.body.role;  
    biddingTemp.amount = req.body.amount;  
    biddingTemp.save((err, doc) => {
            if (!err) { 
                res.send(doc); 
            } 
            
        }); 
       
}
 

module.exports.biddingDetails = async (req, res, next) => {  
    Bidding.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}

module.exports.biddingTempDetails = async (req, res, next) => {  
    BiddingTemp.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}

module.exports.removebiddingTemp = async (req, res, next) => {  
    db.collection("biddingtemps").drop()
}
  
