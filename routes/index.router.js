const express = require('express');
const router = express.Router();
const multer = require("multer");
const jwtHelper = require('../config/jwtHelper'); 
require('../config/passportConfig');


const ctrlUser = require('../controllers/user.controller');  
const ctrlBidding = require('../controllers/bidding.controller'); 
const ctrlBiddingList = require('../controllers/biddingList.controller'); 
const ctrlPayment = require('../controllers/payment.controller');
const ctrlAmount = require('../controllers/amounts.controller');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}_${file.originalname}`)
    }

})

const upload = multer({ storage: storage });

// user register and login 
router.post('/member', ctrlUser.user);  
router.get('/memberDetails', ctrlUser.userDetails);  

router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile); 

router.post('/bidding', ctrlBidding.bidding);  
router.get('/biddingDetails', ctrlBidding.biddingDetails);   
router.post('/biddingTemp', ctrlBidding.biddingTemp);  
router.get('/biddingTempDetails', ctrlBidding.biddingTempDetails);   

router.post('/biddingList', ctrlBiddingList.biddingList);  
router.get('/biddingsMerge', ctrlBiddingList.biddingsMerge);
router.get('/biddingListDetails', ctrlBiddingList.biddingListDetails);
router.get('/biddingListById/:id', ctrlBiddingList.biddingListById);
router.put('/updateBiddingList/:id', ctrlBiddingList.updateBiddingList);

router.post('/payment', jwtHelper.verifyJwtToken, ctrlPayment.payment);
router.get('/paymentDetailsOwner', ctrlPayment.paymentDetailsOwner); 
router.get('/paymentDetails', jwtHelper.verifyJwtToken, ctrlPayment.paymentDetails); 
router.get('/paymentListById/:id', ctrlPayment.paymentListById);
router.put('/updatePayment/:id', ctrlPayment.updatePayment);

router.post('/amount', ctrlAmount.amount);   
router.get('/amountDetails', ctrlAmount.amountDetails); 
router.get('/amountById/:id', ctrlAmount.amountById);
router.put('/updateAmount/:id', ctrlAmount.updateAmount);

module.exports = router;



