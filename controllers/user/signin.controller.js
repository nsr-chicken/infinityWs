var { User } = require("../../model/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.signIn = async (reqData, callback) => {
    let user = await User.findOne({ email: reqData.username });
    if (user) {
        bcrypt.compare(reqData.password, user.password, (err, result) => {
            if (err) throw err;
            if (result) {
                jwt.sign(
                    { id: user._id, userType: user.userType, userName: user.userName,academyId:user.academyId },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" },
                    (err, token) => {
                        if (err) throw err;
                        let res = {
                            success: true,
                            data: {
                                userId: user._id,
                                token: token,
                            }
                        }
                        return callback(null, res);
                    }
                )

            } else {
                let res = {
                    success: false,
                    success: false,
                    error: {
                        message: "Password Wrong",
                    }
                }
                return callback(res, null);
            }
        });
    } else {
        let res = {
            success: false,
            success: false,
            error: {
                message: "E-Mail not found",
            }
        }
        return callback(res, null);
    }



}