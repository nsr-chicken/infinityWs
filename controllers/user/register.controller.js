
var { User } = require("../../model/user");
var bcrypt = require("bcryptjs");

exports.register = async (reqData, callback) =>{

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(reqData.password, salt, async (err, hash) => {
            if (err) throw err;
            reqData.password = hash;
            let user = new User(reqData);
            try {
                await user.save().then((data) => {
                    if (data) {
                        let res = {
                            success: true,
                            data: {
                                message: "Successfully created",
                                userId: user._id
                            }
                        }

                        return callback(null, res);
                        // res.json({
                        //   success: true,
                        //   data: {
                        //     message: "Successfully created",
                        //     userId: user._id
                        //   }
                        // });
                    }
                }).catch((error) => {
                    console.log(error);
                    let res = {
                        success: false,
                        error: {
                            message: "User not created",
                        }
                    }
                    return callback(res, null);
                });

            } catch (error) {
                console.log(error);
                let res = {
                    success: false,
                    error: {
                        message: "User not created",
                    }
                }
                return callback(res, null);
            }





        });

    });



}
