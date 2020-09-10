var express = require('express');
var router = express.Router();
var { User } = require("../model/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const constants = require('../constants');

/* Post users creat. */
router.post('/register', async (req, res, next) => {
  req.body.userType = constants.USER_TYPE.STUDENT;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      if (err) throw err;
      req.body.password = hash;
      let user = new User(req.body);
      try {
        await user.save().then((data) => {
          if (data) {
            res.json({
              success: true,
              data: {
                message: "Successfully created",
                userId: user._id
              }
            });
          }
        }).catch((error) => {
          res.status(500).json({
            success: false,
            error: {
              message: "User not created",
            }

          });
        });

      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          error: {
            message: "User not created",
          }

        });
      }

    });
  });
});





//user login function
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) throw err;
      if (result) {
        jwt.sign(
          { id: user._id, type: user.userType },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              success: true,
              data: {
                id: user._id,
                token: token,
              }

            });
          }
        )

      } else {
        res.status(401).json({
          success: false,
          error: {
            message: "Password Wrong",
          }
        });
      }
    });
  } else {
    res.status(401).json({
      success: false,
      error: {
        message: "E-Mail not found",
      }

    });
  }
});






module.exports = router;
