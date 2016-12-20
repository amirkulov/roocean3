var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var mongo = require('mongo');
var monk = require('monk');
var FeedParser = require('feedparser');
var mongoose = require('mongoose');

// Подключение к БД - Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/roocean');


//*************************************
// *********** МОДЕЛИ *****************
//*************************************

var users = require('../models/users');     // Пользователи
var companies = require('../models/companies');  // Компании
var people = require('../models/news');     // Люди




// var user = new users({
//     username: 'vedomosti',
//     email: 'vedomosti@mail.ru',
//     password: '123654789',
//     avatar: 'av.jpg',
//     type: 0
// });
//
// user.save(function (err, data) {
//     if (err)
//         console.log(err);
//     else
//         console.log('Saved ', data );
// });


users.find({"username":"rbc"}).limit(1).exec(function (err, docs){
    if(err)
        return console.log(err);

    var idUser = docs[0]._id;
    //
    // var company = new companies({
    //     users: idUser,
    //     link: 'http://www.rbc.ru/',
    //     rss: ['http://static.feed.rbc.ru/rbc/logical/footer/news.rss']
    // });
    //
    // company.save(function (err, data) {
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log('Saved ', data );
    // });


    //console.log(docs[0]._id);
});

































//*************************************
// *********** ХЕЛПЕРЫ ****************
//*************************************

var dateHelper = require('../helpers/date');













//
// var vedomosti = "http://www.vedomosti.ru/rss/news.xml";
// var arSource = {"vedomosti":"http://www.vedomosti.ru/rss/news.xml"};
//
//
// var arNews = [];
//
// dbMonk.users.insert({username: 'lenta', email: 'lenta@mail.ru', password: '!@#$', avatar: 'images/av.jpg', type: 'companies'});
//
// //users.find({}).sort({'_id': -1}).limit(100).exec(function (err, docs) {});
//
// var req = request(vedomosti),
//     feedparser = new FeedParser([]);
//
// req.on('response', function (res) {
//     var stream = this;
//
//     if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
//
//     stream.pipe(feedparser);
// });
//
//
//
//
//
//
// feedparser.on('readable', function() {
//     // This is where the action is!
//     var stream = this;
//     var meta = this.meta;
//     var item;
//     var link;
//
//     while (item = stream.read()) {
//         link = item.link;
//         arNews={
//             //"users" : -----------------------------,
//             "title" : item.title,
//             "description" : item.description,
//             "categories" : item.categories,
//             "date": item.date,
//             "link": item.link,
//             "image": item.image
//         };
//     }
//
//
//     //console.log(arNews);
//     //newsCollection.insert(arNews);
// });