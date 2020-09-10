var express = require("express");
var router = express.Router();
var { authenticate, permit } = require("../library/authenticate");
var { Course } = require("../model/courses")



/* Post courses creat. */
router.post("/create", [authenticate], async (req, res) => {
  let course = new Course(req.body);
  try {
    await course.save().then((data) => {
      if (data) {
        res.json({
          success: true,
          data: {
            message: "Successfully created",
            courseId: course._id
          }
        });
      }
    }).catch((error) => {
      res.status(500).json({
        success: false,
        error: {
          message: "Course not created",
        }

      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: {
        message: "Course not created",
      }

    });
  }

});

/* put courses Update. */
router.put("/:courseId", [authenticate], async (req, res) => {
  var course = await Course.findByIdAndUpdate(req.params.courseId, req.body, function (err, doc) {
    if (err) throw err;
    try {
      if (doc) {
        res.json({
          success: true,
          data: {
            message: "Successfully Updated",
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
          message: "Course not Updated",
        }
      });
    }
  });

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