var auth = require('./auth');
var mongoose = require('mongoose');

module.exports = function (app) {


///////////////////////////
    var printSchema = mongoose.Schema({
        title: String,
        category: String,
        ratio: String,
        img: String,
        alt: String,
        dateAdded:  {type: Date, default: Date.now}
    });

    var Print = mongoose.model('Print', printSchema);

    app.get('/api/prints', function (req, res){
        return Print.find({}, function(err, docs) {
            if (!err){
                return res.send(docs);
            } else {throw err;}
        });
    });

    app.get('/api/prints/:category', function (req, res){
        var category = req.params.category;
        return Print.find({category: category}, function(err, docs) {
            if (!err){
                return res.send(docs);
            } else {throw err;}
        });
    });

    app.get('/api/print/:title', function (req, res){
        var title = req.params.title;
        return Print.find({title: title}, function(err, docs) {
            if (!err){
                return res.send(docs);
            } else {throw err;}
        });
    });
    ///////////////////////////

    app.get('/partials/:partialPath', function (req, res) {
        res.render('partials/' + req.params.partialPath);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.get('/api', function (req, res) {
        res.send('API is running');
    });

    app.get('*', function (req, res) {
        res.render('index',
            {
                bootstrappedUser: req.User
            });
    });
};

