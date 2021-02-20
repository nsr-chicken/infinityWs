var express = require('express');
var router = express.Router();
var { register, signIn } = require('../controllers');
var {validator,signInValidation,SignupValidation} = require('../validation');
var { authenticate, permit } = require("../library/authenticate");





router.post('/register',[authenticate], validator.body(SignupValidation),async (req, res, next) => {
  req.body.academyId = req.academyId;
  req.body.createdBy = {
    userName: req.userName,
    userId: req.userId
  }
  console.log(req.body, '<-----------')
  register(req.body, (gADErr, gADRes) => {
    if (gADRes) {
      res.json(gADRes);
    } else {
      res.status(500).json(gADErr);
    }
  });
});





//user login function
router.post("/signin", validator.body(signInValidation), async (req, res) => {
  signIn(req.body, (gADErr, gADRes) => {
    if (gADRes) {
      res.json(gADRes);
    } else {
      res.status(500).json(gADErr);
    }
  });

});






module.exports = router;
