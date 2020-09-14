var express = require("express");
var router = express.Router();
// var { authenticate, permit } = require("../library/authenticate");
var { academyCreat } = require('../controllers')
var {validator,academyValidation} = require('../validation');

/* Post courses creat. */
router.post("/create",  validator.body(academyValidation),  (req, res) => {
    req.body.academyId = req.academyId;
    req.body.createdBy = {
      userName: req.userName,
      userId: req.userId
    }

    academyCreat(req.body, (gADErr, gADRes) => {
        if (gADRes) {
            res.json(gADRes);
        } else {
            res.status(500).json({ gADErr });
        }
    });
});


module.exports = router;