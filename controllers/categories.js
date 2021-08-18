const db = require('../server/models');
const Category = db.Category;

const getAllCategories = async (req, res) => {
        try {
            const categories = await Category.findAll({
                attributes: ['id', 'title', 'thumbnail', 'description']
              });
            if(categories) {
                 res.status(200).send(
                    categories,
                ); 
            } else {
                res.status(500).json({ error: "undefined"});
            }
          
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    };

   const addCategory =  async (req, res) => {
        try {
            const body = req.body;
            const toSave = {...body, thumbnail:req.file.path };
            console.log(toSave);
            if(body) {
                Category.create(toSave).then((newCategory) => {
                    res.status(201).json({ message: "Category added success", data: newCategory });
                }).catch(error => {
                    res.status(404).json({ error : error.message });
                })
            } else {
                res.status(500).json({ error: "body is undefined"});
            }
        } catch(err) {
            res.status(500).json({error: err.message });
        }
    }

    const category = {
          'allCategory': getAllCategories,
          'addCategory': addCategory  
    };

    module.exports = category;

