const authJwt = require("./auth_jwt");
const verifySignUp = require("./auth_signup");
const authApiKey = require("./common")

module.exports = {
  authJwt: authJwt,
  verifySignUp: verifySignUp,
  authKey: authApiKey
};