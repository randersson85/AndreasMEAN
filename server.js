var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config')[env];
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);


var User = mongoose.model('User');
passport.use(new LocalStrategy(
    function (username,password,done){
        console.log("in passport")
        User.findOne({userName:username}).exec(function(err,user){
            if(user){
                return done(null, user);
            }else{
                console.log("findOne failning")
                return done (null, false);
            }
        })
    }
));

passport.serializeUser(function(user, done) {
    console.log("serializing")
    if(user){
        console.log("serialized" + user)
        done(null, user._id)
    }
});

passport.deserializeUser(function(id, done) {
    console.log("deserializing")
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

require('./server/config/routes')(app);

app.listen(config.port);
console.log("Listening on port " + config.port + "....");
