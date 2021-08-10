const validateAPIKey = async (req, res, next) => {
    if (req.headers['x-api-key'] !== 'abc') {
        return res.status(400).json({error: 'Invalid Api key'});
    }
    next();
}

module.exports = {
  apivalidator: validateAPIKey
}