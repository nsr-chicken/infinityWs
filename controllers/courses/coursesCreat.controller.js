
var { Course } = require("../../model/courses")

exports.courseCreat = async (reqData, callback) => {

    let course = new Course(reqData);
    try {
        await course.save().then((data) => {
            if (data) {
                let res = {
                    success: true,
                    data: {
                        message: "Successfully created",
                        courseId: course._id
                    }
                }
                return callback(null, res);

            }
        }).catch((error) => {
            let res = {
                success: false,
                success: false,
                error: {
                    message: "id not match",
                }
            }
            return callback(res, null);

        });
    } catch (error) {
        console.log(error);
        let res = {
            success: false,
            success: false,
            error: {
                message: "Course not created",
            }
        }
        return callback(res, null);
    }


}