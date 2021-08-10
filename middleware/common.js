const validateAPIKey = async (req, res, next) => {
    if (req.headers['x-api-key'] !== 'abc') {
        res.status(400).send({error: 'Invalid Api key'});
    }
    next();
}

module.exports = {
  apivalidator: validateAPIKey
}