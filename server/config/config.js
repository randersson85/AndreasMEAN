//Ställer in vart serverns root befinner sig
var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

 //Konditionell export av inställningar av servern
module.exports = {
    development:{
        db: 'mongodb://localhost/andreas',
        rootPath: rootPath,
        port: process.env.PORT || 3030 //Port som webservern lyssnar på
    },
    production:{
        db: 'mongodb://andreas:andreas@ds051831.mongolab.com:51831/heroku_app34590524',
        rootPath: rootPath,
        port: process.env.PORT || 80

    }
}