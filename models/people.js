var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PeopleSchema = new Schema({
    users: ObjectId,
    firstname: String,
    lastname: String,
    age: Number,
    gender: Number
});

var PeopleModel = mongoose.model('People', PeopleSchema);

module.exports = PeopleModel;