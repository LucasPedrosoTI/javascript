var express = require('express');
var router = express.Router();

const caseController = require('../controllers/caseController');

/* GET home page. */
router.get('/', caseController.index );

module.exports = router;
