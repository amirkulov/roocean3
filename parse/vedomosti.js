var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var mongo = require('mongo');
var monk = require('monk');
var FeedParser = require('feedparser');

// Подключение к БД - Monk
var dbMonk = monk('localhost:27017/roocean');
// Коллекция новости
var newsCollection = dbMonk.get('news');

// ------ МОДЕЛИ ------ //
// Новости
var news = require('../models/news');
// Пользователи
var users = require('../models/users');

// ------ ХЕЛПЕРЫ ------ //
// Даты
var dateHelper = require('../helpers/date');

var vedomosti = "http://www.vedomosti.ru/rss/news.xml";

var arNews = [];

var req = request(vedomosti),
    feedparser = new FeedParser([]);

req.on('response', function (res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

    stream.pipe(feedparser);
});

feedparser.on('readable', function() {
    // This is where the action is!
    var stream = this,
        meta = this.meta,
        item;

    while (item = stream.read()) {
        arNews={
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