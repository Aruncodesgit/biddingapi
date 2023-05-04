const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const passport = require('passport');
const _ = require('lodash');
const User = mongoose.model('User');
var db = mongoose.connection;
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const e = require('express');

const jwt = require('jsonwebtoken');
 

module.exports.testDetails = async (req, res, next) => { 
    res.send('hello')
} 

// post register
module.exports.user = async (req, res, next) => {

    var user = new User();
    user.fullName = req.body.fullName;  
    user.phone = req.body.phone;  
    user.email = req.body.email;
    user.password = req.body.password;   
    user.address = req.body.address;   
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save((err, doc) => {
            if (!err) {
                res.send(doc); 
            } 
            else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email or Emp. ID found.']);

                else
                    return next(err);
            } 
        }); 

}
 

module.exports.userDetails = async (req, res, next) => {  
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    });
}

 
 

// login authenticate
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {

        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) { 
            
            res.status(200).json({ _id: user._id, fullName: user.fullName,  "token": user.generateJwt() });
        }

        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}




// user profile
module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({
                    status: true, user: _.pick(user, [
                        '_id', 'fullName', 'email', 'phone'

                    ])
                });
        }
    );
}
 