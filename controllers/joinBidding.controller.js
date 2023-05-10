const mongoose = require('mongoose'); 
const JoinBidding = mongoose.model('JoinBidding'); 

// post register
module.exports.joinBiding = async (req, res, next) => {
    var join = new JoinBidding();
    join.id = req.body.id; 
    join.save((err, doc) => {
        if (!err) {
            res.send(doc);
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