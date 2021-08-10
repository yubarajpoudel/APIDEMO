var express = require('express');
var router = express.Router();
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.post("/api/auth/signup",
    [
      verifySignUp.checkEmailExisted,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

router.post("/api/auth/signin", controller.signin);
module.exports = router;