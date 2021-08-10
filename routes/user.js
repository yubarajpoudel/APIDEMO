var express = require('express');
var router = express.Router();
const verifySignUp = require("../middleware/index").verifySignUp;
const controller = require("../controllers/auth.controller");

router.post("/api/auth/signup",
    [
      verifySignUp.checkEmailExists,
      verifySignUp.checkRolesExists
    ],
    controller.signup
  );

router.post("/api/auth/signin", controller.signin);
module.exports = router;