var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callback() {
        console.log('database connection opened');
    });

    var userSchema = mongoose.Schema({  //Skapar upp databasschema enligt efterföljande parametrar
        firstName: String,
        lastName: String,
        userName: String,
        salt: String,
        hashed_pwd: String
    });
    userSchema.methods = {              //Skapar databasmetoder som ska finnas tillgängliga
        authenticate: function(passwordToMatch) {
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);
    User.find({}).exec(function (err, collection) {     //Hämtar samtliga lagrade användare i databasen
        if (collection.length === 0) {                  //Finns inga användare i databasen, skapas två användare
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'X&My+q%KysZ2LSEbvLY36@3bY!3%rSAKc6QjnW$hs%p+zNFX7=cU@x+qazc*ejZDzge6dC?hTRYkbC&gPqqQWLdFNBMJ?qMXcsKscA#mZ_s$%KK*t#9$G2dTYJAMQM@f?@UU9S-#mz28_yX!tNgq%d=R5Q5K?*wjhY$7pUKXp=$9fPG5JsxP2A?wQczMz_qNebeqgavnLRkut^F!_*MZyDHX*AG-H#cT?kNg*AmV%8@Y?ZgE+dQmf@GDn!n!T3@!');
            User.create({firstName: 'Andreas',
                lastName: 'Karlsson',
                userName: 'Megakarlsson',
                salt: salt,
                hashed_pwd: hash
            });
        }
    });
};
/**
 * Skapar ett salt som används för att hasha vårat lösenord
 * Saltet består av 128 slumpmässiga bitar som konverteras till base64
 */
function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}
/**
 *
 * @param salt  salt från createSalt
 * @param pwd   valt användarnamn
 * @returns     returnerar lösenordet hashat med saltet
 */
function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}