var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.send('hola, esta es la informacion sobre nosotros');
    res.render("nosotros");
});

module.exports = router;
