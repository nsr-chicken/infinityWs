
var { Course } = require("../../model/courses")

exports.courseUpdate = async (courseId, reqData, callback) => {
    var course = await Course.findByIdAndUpdate(courseId, reqData, (err, doc) => {
            if (err) throw err;
        try {
            if (doc) {
                let res = {
                    success: true,
                    data: {
                        message: "Successfully Updated",
                        courseId: doc._id
                    }
                }
                return callback(null, res);
            } else {
                let res = {
                    success: false,
                    success: false,
                    error: {
                        message: "id not match",
                    }
                }
                return callback(res, null);

            }
        } catch (error) {
            console.log(error, '----->Anvesh');
            let res = {
                success: false,
                success: false,
                error: {
                    message: "Course not Updated",
                }
            }
            return callback(res, null);

        }
    });


}