//Importerar beroenden och ställer in vårat webramverk
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');


module.exports = function(app, config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views'); //Vart vyer finns på servern
    app.set('view engine', 'jade'); // Jade används för att rendrera sidorna
    app.use(logger('dev'));         // Skapar en loggfunktion
    app.use(cookieParser());        // Skapar förutsättningar för användande av cookies
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());     // Möjliggör parsning av JSON data

    app.use(session({secret: 'supernova', saveUninitialized: true, resave: false})); //Inställningar för sessionskaka

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(      //Inställningar för stylus
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
}