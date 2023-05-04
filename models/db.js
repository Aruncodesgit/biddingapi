const mongoose = require('mongoose');


mongoose.set('useFindAndModify', false );
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
},{useNewUrlParser: true});

require('./user.model');   
require('./bidding.model'); 
require('./biddingTemp.model'); 
require('./biddingList.model'); 
require('./payment.model'); 
require('./amounts.model'); 