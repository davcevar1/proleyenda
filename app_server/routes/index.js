var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* GET home page. */

router.get('/', ctrlMain.index );
router.get('/leyendas', ctrlMain.leyendas );



module.exports = router;
