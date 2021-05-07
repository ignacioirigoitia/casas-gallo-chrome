var express = require('express');
const { index, puertoGallo, chana, timbu } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index);
router.get("/puerto-gallo", puertoGallo);
router.get("/chana", chana);
router.get("/timbu", timbu);

module.exports = router;
