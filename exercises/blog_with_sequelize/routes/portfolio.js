var express = require('express');
var router  = express.Router();

router.get('/', function(request, response) {
	response.render('portfolio/index');
});

module.exports = router;