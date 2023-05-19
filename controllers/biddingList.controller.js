const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID; 
const BiddingList = mongoose.model('BiddingList'); 
var db = mongoose.connection;

// post register
module.exports.biddingList = async (req, res, next) => {

    var biddingList = new BiddingList();
    biddingList.biddingNo = req.body.biddingNo;   
    biddingList.amount = req.body.amount;  
    biddingList.date = req.body.date;  
    biddingList.status = req.body.status;  
    biddingList.save((err, doc) => {
            if (!err) {
                res.send(doc); 
            } 
            
        }); 

}

 

module.exports.biddingListDetails = async (req, res, next) => {  
    BiddingList.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}


module.exports.updateBiddingList = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(` No record found with given id : ${req.params.id}`);

    var biddingList = { 
        biddingNo:req.body.biddingNo,
        amount:req.body.amount,
        date:req.body.date,
        tknAmount:req.body.tknAmount,
        tknUser:req.body.tknUser,
        roleType:req.body.roleType,
        status:req.body.status,
        amountInHand:req.body.amountInHand
        
    }; 
   
    BiddingList.findByIdAndUpdate(req.params.id, { $set: biddingList }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc);  }
        else { console.log('Error in bidding List update:' + JSON.stringfy(err, undefined, 2)); }
    });
}

// get by Id 
module.exports.biddingListById = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

    BiddingList.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}


 // delete register
 module.exports.biddingListDelete = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

        BiddingList.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send('Delted Successfully !'); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    })

}
 


 

module.exports.biddingsMerge = async (req, res, next) => {    
    //db.collection('biddingtemps').drop();
    
    db.collection('biddinglists').aggregate([
        {
            $lookup:{
                from: "biddings", 
                localField:"biddingNo",
                foreignField:"chitNo",
                as: "details", 
                
            }
        }, 
		{
            $addFields:  {
                "differenceAmount": { $max: "$details.amount"} 
            } 
        }, 
        // { $unset: [ 
        //     "email", 
        //     "password", 
        //     "saltSecret",  
        //  ] },
        {
            $out : "biddinglists"
        }
    ]).toArray(function (err, docs) {
        if(!err) {res.send(docs);}  
    }); 
}

 


 