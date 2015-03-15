/**
 * server.js innehåller samtliga parametrar och importerar för projektet relevanta moduler och middleware.
 * Filen börjar med att importera express vilket är vårat webframework
 */
var express = require('express');
/**
 * Kollar av node serverns enviroment variabel, är denna inte satt förutsätter vi att vi befinner oss i utvecklingsmiljö
 * Är vi i utvecklingsmiljö använder vi localhost som databas och lyssnar efter http-anrop på 3030, i annat fall är databasen
 * placerad hos mongolab och vi lyssnar på port 80
 */
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//Startar upp express
var app = express();
//import av utbrutna filer för konfiguration.
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);
//Säger åt servern att lyssna på vald port utifrån konfiguration och skriver till serverkonsollen vilken port vi lyssnar på
app.listen(config.port);
console.log("Listening on port " + config.port + "....");