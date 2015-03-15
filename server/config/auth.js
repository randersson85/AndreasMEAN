//Inställningar för passport vilket används för autensiering av administratör för åtkomst till adminpanelen
var passport = require('passport');

exports.authenticate = function(req,res,next){
    var auth = passport.authenticate('local',function(err,user){ //Sätter upp passport till att använda en lokal autentisering
        if(err) {
            return next(err);
        }
        if(!user){
            res.send({success:false});
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.send({success:true, user:user});
        });
    });
    auth(req, res, next);
}