var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* GET home page. */

router.get('/', ctrlMain.index );
router.get('/leyendas', ctrlMain.leyendas );
router.get('/almeida', ctrlMain.almeida );
router.get('/C1028', ctrlMain.C1028 );

module.exports = router;
