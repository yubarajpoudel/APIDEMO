const validateAPIKey = async (req, res) => {
    if (req.headers['x-api-key'] !== 'abc') {
        res.status(400).send({error: 'Invalid Api key'})
    } else {
      next()
    }
}

module.exports = {
  apivalidator: validateAPIKey
}