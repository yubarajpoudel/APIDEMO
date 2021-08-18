const { News } = require("../server/models")

const getNews = async (req, res) => {
        try {
            const allNews = await News.findAll({
                attributes: ['id', 'title', 'description']
              });
            if(allNews) {
                 res.status(200).send(
                    allNews,
                ); 
            } else {
                res.status(500).json({ error: "undefined"});
            }
        }
        catch(err) {
            res.status(500).send({'error': error.message })
        }
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
    'add': addNews
}
module.exports = news;