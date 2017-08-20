var express = require('express');
var router = express.Router();

var items = require('../controllers/items.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  items.index(req, res)
});

router.get('/new/:item', function(req, res, next) {
  items.create(req, res)
});

router.get('/:item', function(req, res, next) {
  items.show(req, res)
});

router.get('/remove/:item/', function(req, res, next) {
  items.destroy(req, res)
});

module.exports = router;
