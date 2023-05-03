const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const Amount = mongoose.model('Amount'); 

// post register
module.exports.amount = async (req, res, next) => {
    var amount = new Amount();
    amount.amtHand = req.body.amtHand;
    amount.userPayAmt = req.body.userPayAmt;
    amount.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }

    });
   
}



module.exports.amountDetails = async (req, res, next) => {
    Amount.find((err, docs) => {
        if (!err) { res.send(docs); } 
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });  
}

// get by Id 
module.exports.amountById = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

        Amount.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}


module.exports.updateAmount = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(` No record found with given id : ${req.params.id}`);

    var amount = { 
        amtHand:req.body.amtHand,
        userPayAmt:req.body.userPayAmt, 
    }; 
   
    Amount.findByIdAndUpdate(req.params.id, { $set: amount }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc);  }
        else { console.log('Error in bidding List update:' + JSON.stringfy(err, undefined, 2)); }
    });
}