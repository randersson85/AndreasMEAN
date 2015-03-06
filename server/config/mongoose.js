var mongoose = require ('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callback() {
        console.log('database connection opened');
    });

    var messageSchema = mongoose.Schema(
        {
            messages: String
        }
    );
    var Message = mongoose.model('Message', messageSchema);

    var mongoMessage;
    Message.findOne().exec(function (err, messageDoc) {
        mongoMessage = messageDoc.messages;
    });
}