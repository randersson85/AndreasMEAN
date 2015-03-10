var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function() {
    passport.use(new LocalStrategy(
        function (username,password,done){
            User.findOne({userName:username}).exec(function(err,user){
                if(user && user.authenticate(password)){
                    console.log("user and password ok");
                    return done(null, user);
                }else{
                    return done (null, false);
                }
            });
        }
    ));
    passport.serializeUser(function(user, done) {
        if(user){
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}