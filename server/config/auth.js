var passport = require('passport');

exports.authenticate = function(req,res,next){
    console.log("login called in routes.js")
    var auth = passport.authenticate('local',function(err,user){
        console.log("trying to authenticate local")
        if(err) {
            return next(err);
        }
        if(!user){
            console.log("can't find user. This is the session: ");
            console.log(req.session);
            res.send({success:false});
        }
        req.logIn(user, function(err) {
            console.log("trying to log in")
            if (err) {
                return next(err);
            }
            res.send({success:true, user:user});
        });
    });
    auth(req, res, next);
}