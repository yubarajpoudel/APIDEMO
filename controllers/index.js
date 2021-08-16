const auth_controller = require('./auth')
const news_controller = require('./news')
const category = require('./categories')
const auth = require('./auth')
const news = require('./news')

module.exports = {
    'auth': auth,
    'category': category,
    'news': news
}