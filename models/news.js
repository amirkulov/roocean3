var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
    users: ObjectId,
    link: String,
    date: String,
    title: String,
    picture: String,
    text: String,
    categories: String
});

var NewsModel = mongoose.model('News', NewsSchema);

module.exports = NewsModel;