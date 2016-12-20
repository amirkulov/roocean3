var request = require('request');
var async = require('async');
var FeedParser = require('feedparser');
var mongo = require('mongo');
var mongoose = require('mongoose');

// Подключение к БД - Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/roocean');


//*************************************
// *********** МОДЕЛИ *****************
//*************************************

var users = require('./models/users');          // Пользователи
var companies = require('./models/companies');  // Компании
var people = require('./models/news');          // Люди


var feedparser = new FeedParser([]);

//*************************************
// *********** ХЕЛПЕРЫ ****************
//*************************************

var dateHelper = require('./helpers/date');

//
// companies.find({}).exec(function (err, docs) {
//     if(err)
//         return console.log(err);
//
//     //console.log(docs[0].rss);
//     //console.log(docs);
//     //var rssNews;
//
//     docs.forEach(function(company) {
//        var arRss = company.rss;
//         arRss.forEach(function(rss) {
//             console.log(rss);
//         });
//     });
//
// });






async.waterfall([
    function(callback) {
        companies.find({}).exec(function (err, docs) {
            if(err)
                return console.log(err);

            async.map(docs, getAllRss, function (err, results) {
                callback(null, results);
            });

        });
    },
    function(allRssCompanies, callback) {

        async.map(allRssCompanies, setOneAr, function (err, results) {
            callback(null, results);
        });

        callback(null, allRssCompanies);
    }
],
    function (err, result) {
        console.log(result);
    });


function getAllRss(dataCompany, callback) {
    var arRss = dataCompany.rss;

    callback(null, arRss);
}

function setOneAr(dataCompany, callback) {
    dataCompany.forEach(function(item) {
        feedparser.on('readable', function() {
            // This is where the action is!
            var stream = this;
            var meta = this.meta;
            var item;
            var link;

            while (item = stream.read()) {
                link = item.link;
                arNews={
                    //"users" : -----------------------------,
                    "title" : item.title,
                    "description" : item.description,
                    "categories" : item.categories,
                    "date": item.date,
                    "link": item.link,
                    "image": item.image
                };
            }


            //console.log(arNews);
            newsCollection.insert(arNews);
        });
    })

    callback(null, arRss);
}

