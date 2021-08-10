const db = require("../server//models");
const Roles = db.Roles;
const User = db.User;
var Sequelize = require('sequelize');
const e = require("express");
const Op = db.Sequelize.Op;

const checkEmailExisted = async (req, res, next) => {
    // Email
    console.log(User);
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }
      next();
    });
};

const checkRolesExisted = async (req, res, next) => {
  console.log("check roles")
  if (req.body.roles) {
      Roles.findAll({
        where: { 
          name: {
            [Op.or]: req.body.roles
          }
        }
      }).then((result) => {
        if(!resutl && result.length == 0) {
          res.status(401).send({ error: 'Roles not found'});
          return;
        }
      });
  } else {
    res.status(500).send({ error: 'Roles is missing'});
  }
  next();
};

const verifySignUp = {
  checkEmailExists: checkEmailExisted,
  checkRolesExists: checkRolesExisted
};

module.exports = verifySignUp;