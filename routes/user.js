var express = require('express');
var router = express.Router();
const verifySignUp = require("../middleware/index").verifySignUp;
const controller = require("../controllers/auth");
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
var jsonParser = bodyParser.json()

router.post("/api/auth/signup",
    [
      jsonParser,
      verifySignUp.checkEmailExists,
      verifySignUp.checkRolesExists
    ],
    controller.signup
  );

router.post("/api/auth/signin", controller.signin);
module.exports = router;