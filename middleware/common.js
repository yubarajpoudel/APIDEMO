const auth_config = require("../config/auth.config")
const app_config = require("../config/app.config")

const validateAPIKey = async (req, res, next) => {
    if (req.headers['x-api-key'] !== auth_config.api_key) {
        return res.status(400).json({error: app_config.invalid_api_key_message});
    }
    next();
}

const authKey = {
  apivalidator: validateAPIKey
}
module.exports = authKey;