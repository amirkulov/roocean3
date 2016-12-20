var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CompaniesSchema = new Schema({
    users: ObjectId,
    link: String,
    rss: Array
});

var CompaniesModel = mongoose.model('Companies', CompaniesSchema);

module.exports = CompaniesModel;