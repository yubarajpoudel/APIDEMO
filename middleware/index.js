const authJwt = require("./auth_jwt");
const verifySignUp = require("./auth_signup");
const keyAuth = require("./common")

module.exports = {
  authJwt: authJwt,
  verifySignUp: verifySignUp,
  keyAuth: keyAuth
};