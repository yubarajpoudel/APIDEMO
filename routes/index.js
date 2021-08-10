var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/images/' })
const controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', controllers.getAllCategories);
router.post('/category', upload.single('thumbnail'), controllers.addCategory);

module.exports = router;
