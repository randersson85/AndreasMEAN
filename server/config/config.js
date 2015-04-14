var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports = {
    development:{
        //db: 'mongodb://localhost/multivision',
        db: 'mongodb://andreas:andreas@ds051831.mongolab.com:51831/heroku_app34590524',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://andreas:andreas@ds051831.mongolab.com:51831/heroku_app34590524',
        rootPath: rootPath,
        port: process.env.PORT || 80

    }
}