const model = require('../server/models');

const { Category } = model;
const category = async (req, res) => {
    try {
        const categories = await Category.findAll({
            attributes: ['thumbnail', 'description']
          });
        return res.status(200).json({
            categories,
        });
    } catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = category;