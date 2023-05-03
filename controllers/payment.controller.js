const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID; 
const Payment = mongoose.model('Payment'); 
 
// post register
module.exports.payment = async (req, res, next) => {

    var payment = new Payment();
    payment.userName = req.body.userName; 
    payment.month = req.body.month; 
    payment.amount = req.body.amount; 
    payment.paidBy = req.body.paidBy;  
    payment.status = req.body.status; 
    payment.user_id = req._id;  
    payment.uniqueID = req.body.month + req._id;   
    payment.save((err, doc) => {
        if (!err) {
            res.send(doc); 
        } 
        else { 
            if (err.code == 11000)
                res.status(422).send(['Payment is done for this month']);
                
            else
                return next(err); 
        }
            
    }); 

}
 

module.exports.paymentDetailsOwner = async (req, res, next) => {  
    Payment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}

module.exports.paymentDetails = async (req, res, next) => {  
    const payment = await Payment.find({user_id: req._id});
    res.json(payment)
}

 
// get by Id 
module.exports.paymentListById = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

        Payment.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}
 

module.exports.updatePayment = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(` No record found with given id : ${req.params.id}`);

    var payment = {  
        status:req.body.status
    }; 
   
    Payment.findByIdAndUpdate(req.params.id, { $set: payment }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc);  }
        else { console.log('Error in bidding List update:' + JSON.stringfy(err, undefined, 2)); }
    });
}
 