const mongoose = require('mongoose'); 
var ObjectId = require('mongodb').ObjectID; 
const JoinBidding = mongoose.model('JoinBidding'); 

// post register
module.exports.joinBiding = async (req, res, next) => {
    var joinBidding= new JoinBidding();
    joinBidding.fullName = req.body.fullName; 
    joinBidding.shortName = req.body.shortName; 
    joinBidding.user_id = req._id; 
    joinBidding.uniqueID = req.body.fullName + req._id;   
    joinBidding.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else { 
            if (err.code == 11000)
                res.status(422).send(['Duplicate ID Found']);
                
            else
                return next(err); 
        }
    });
   
}

module.exports.joinBidingDetails = async (req, res, next) => {  
    JoinBidding.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}

module.exports.joinBidingDelete = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

    JoinBidding.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send('Delted Successfully !'); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    })

}