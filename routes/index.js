var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/images/' })
const controllers = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// category
router.get('/category', controllers.category.allCategory);
router.post('/category', upload.single('thumbnail'), controllers.category.addCategory);

// news
router.get('/news', controllers.news.all)
router.post('/news', controllers.news.add)

module.exports = router;
