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
            hash = hashPwd(salt, 'robert');
            User.create({firstName: 'Robert',
                lastName: 'Andersson',
                userName: 'robert',
                salt: salt,
                hashed_pwd: hash
            });
            salt = createSalt();
            hash = hashPwd(salt, 'johan');
            User.create({firstName: 'Johan',
                lastName: 'Nyström',
                userName: 'johan',
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