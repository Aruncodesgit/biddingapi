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
