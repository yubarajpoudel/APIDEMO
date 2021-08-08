const category = require('../server/models').category;

module.exports = {
    async getAllCategories(req, res){
        try {
            console.log("category", category);
            const categories = await category.findAll({
                attributes: ['id', 'title', 'thumbnail', 'description']
              });
            if(categories) {
                 res.status(200).send(
                    categories,
                ); 
            } else {
                res.send(500).json({ error: "undefined"});
            }
          
        } catch(error) {
            return res.status(500).json({ error: error.message })
        }
    }
} 