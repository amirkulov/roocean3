var express = require('express');
var router = express.Router();

// Тестовое добавление компании
require('../parse');
//require('../db_queries/addCompany');

router.use('/', function(req, res) {
        res.render('index', {
            "title": 'roocean'
        });
});

module.exports = router;
