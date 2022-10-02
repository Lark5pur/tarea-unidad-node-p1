var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('hola, tenes la lista de servicios');
  res.render("servicios");
});

module.exports = router;
