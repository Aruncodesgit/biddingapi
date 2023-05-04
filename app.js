require('./config/config');
require('./models/db');

const express = require('express');
const app = express();
const passport = require('passport'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router(); 
const jwtHelper = require('./config/jwtHelper'); 
require('./config/passportConfig');
//const rtsIndex = require('./routes/index.router');
 
 

// middleware

// it used when we use ejs
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());  
//app.use('/', rtsIndex);
app.set('view engine', 'ejs')
app.use('/uploads', express.static('uploads')); 


const ctrlUser = require('./controllers/user.controller');  
const ctrlBidding = require('./controllers/bidding.controller'); 
const ctrlBiddingList = require('./controllers/biddingList.controller'); 
const ctrlPayment = require('./controllers/payment.controller');
const ctrlAmount = require('./controllers/amounts.controller');


 

app.post('/member', ctrlUser.user);  
app.get('/memberDetails', ctrlUser.userDetails);  

app.post('/authenticate', ctrlUser.authenticate);
app.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile); 

app.post('/bidding', ctrlBidding.bidding);  
app.get('/biddingDetails', ctrlBidding.biddingDetails);   
app.post('/biddingTemp', ctrlBidding.biddingTemp);  
app.get('/biddingTempDetails', ctrlBidding.biddingTempDetails);   

app.post('/biddingList', ctrlBiddingList.biddingList);  
app.get('/biddingsMerge', ctrlBiddingList.biddingsMerge);
app.get('/biddingListDetails', ctrlBiddingList.biddingListDetails);
app.get('/biddingListById/:id', ctrlBiddingList.biddingListById);
app.put('/updateBiddingList/:id', ctrlBiddingList.updateBiddingList);

app.post('/payment', jwtHelper.verifyJwtToken, ctrlPayment.payment);
app.get('/paymentDetailsOwner', ctrlPayment.paymentDetailsOwner); 
app.get('/paymentDetails', jwtHelper.verifyJwtToken, ctrlPayment.paymentDetails); 
app.get('/paymentListById/:id', ctrlPayment.paymentListById);
app.put('/updatePayment/:id', ctrlPayment.updatePayment);

app.post('/amount', ctrlAmount.amount);   
app.get('/amountDetails', ctrlAmount.amountDetails); 
app.get('/amountById/:id', ctrlAmount.amountById);
app.put('/updateAmount/:id', ctrlAmount.updateAmount);

 


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

module.exports = router;


 





// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));