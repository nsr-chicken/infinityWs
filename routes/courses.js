var express = require("express");
var router = express.Router();
var { authenticate, permit } = require("../library/authenticate");
var { Course } = require("../model/courses")
var { courseCreat, courseUpdate } = require('../controllers');
var { validator, coursesValidation } = require('../validation');


/* Post courses creat. */
router.post("/create", [authenticate], validator.body(coursesValidation), (req, res) => {
  req.body.academyId = req.academyId;
  req.body.createdBy = {
    userName: req.userName,
    userId: req.userId
  }

  courseCreat(req.body, (gADErr, gADRes) => {
    if (gADRes) {
      res.json(gADRes);
    } else {
      res.status(500).json({ gADErr });
    }
  });


});



/* put courses Update. */
router.put("/:courseId", [authenticate], (req, res) => {
  // var course = await Course.findByIdAndUpdate(req.params.courseId, req.body, function (err, doc) {
  //   if (err) throw err;
  //   try {
  //     if (doc) {
  //       res.json({
  //         success: true,
  //         data: {
  //           message: "Successfully Updated",
  //           courseId: doc._id
  //         }
  //       });
  //     } else {
  //       res.status(500).json({
  //         success: false,
  //         error: {
  //           message: "id not match",
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({
  //       success: false,
  //       error: {
  //         message: "Course not Updated",
  //       }
  //     });
  //   }
  // });

  courseUpdate(req.params.courseId, req.body, (gADErr, gADRes) => {
    if (gADRes) {
      res.json(gADRes);
    } else {
      res.status(500).json({ gADErr });
    }
  })


});


/* courses delete. */
router.delete("/:courseId", [authenticate], async (req, res) => {
  var course = await Course.findOneAndDelete({ _id: req.params.courseId }, function (err, doc) {
    if (err) throw err;
    try {
      if (doc) {
        res.json({
          success: true,
          data: {
            message: "Successfully Delete",
            courseId: doc._id
          }
        });
      } else {
        res.status(500).json({
          success: false,
          error: {
            message: "id not match",
          }
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: {
          message: "Course not Delete",
        }
      });
    }
  });
});



module.exports = router;