var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    req.db.get('users').find({})
        .each(function(doc){
          console.log(doc);
            // handle doc
        });

  res.render('index', { title: 'Roocean' });
});

module.exports = router;
