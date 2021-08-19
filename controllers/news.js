const { News } = require("../server/models");
const category = require("./categories");
const Op = require("../server/models").Sequelize.Op;
const config = require("../config/app.config")


const getNews = async (req, res) => {
        try {
            var catId = req.query.category_id,
            offset = parseInt(req.query.offset || '0');
            const rows = await News.findAll({
                where: catId ? { CategoryId: catId }:{},
                offset: offset,
                limit: config.limit
              });
            if(rows) {
                 res.status(200).send(
                    rows,
                ); 
            } else {
                res.status(500).json({ error: "undefined"});
            }
        }
        catch(err) {
            res.status(500).send({'error': error.message })
        }
    };

const deleteNews = async(req, res) => {

};

const addNews = async (req, res) => {
    try {
        const body = req.body;
        if(body) {
            const toSave = {
                'title': body.title,
                'description': body.description,
                'CategoryId': body.CategoryId
            }
            News.build(toSave).save().then((newCategory) => {
                    res.status(201).json({ message: "News added success", data: newCategory });
                }).catch(error => {
                    res.status(404).json({ error : error.message });
                })
            } else {
                res.status(500).json({ error: "body is undefined"});
            }
    }
    catch(err) {
        res.status(500).send({'error': error.message })
    }
}

const news = {
    'all': getNews,
    'add': addNews,
    'deleteNews': deleteNews
}
module.exports = news;