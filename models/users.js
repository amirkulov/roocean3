var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    age: String
});

var UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;