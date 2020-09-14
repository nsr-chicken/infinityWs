var { Academy } = require("../../model/academy");
var { User } = require("../../model/user");
var { register } = require('../user');
const constants = require('../../constants');

exports.academyCreat = async (reqData, callback) => {


    await User.findOne({
        $or: [
            { 'email': reqData.email },
            { 'phoneNumber': reqData.phoneNumber }
        ]
    }, async (err, user) => {
        if (err) throw err;
        try {
            if (user) {
                let res = {
                    success: false,
                    error: {
                        message: "User alredy exist",
                    }
                }
                return callback(res, null);
            } else {
                let academy = new Academy(reqData);
                await academy.save().then(async (data) => {
                    if (data) {
                        let academyObj = {
                            userName: academy.directorName,
                            userType: constants.USER_TYPE.ADMIN,
                            academyId: academy._id,
                            email: academy.email,
                            password: Math.floor(Math.random() * 1000000).toString(),
                            phoneNumber: academy.phoneNumber,
                            address: academy.address,
                            // createdBy={
                            //     userName:req.userName,
                            //     userId:req.userId
                            //     }
                        }
                        console.log(academyObj)
                        register(academyObj, (gADErr, gADRes) => {
                            if (gADRes) {
                                let res = {
                                    success: true,
                                    data: {
                                        message: "Successfully created",
                                        academyId: academy._id
                                    }
                                }

                                return callback(null, res);
                            } else {
                                // res.status(500).json({ gADErr });
                                return callback(res, null);
                            }
                        }).catch((error) => {
                            console.log('error--->', error)
                            let res = {
                                success: false,
                                error: {
                                    message: "User side not created",
                                }
                            }
                            return callback(res, null);
                        });
                    }
                }).catch((error) => {
                    console.log('error--->', error)
                    let res = {
                        success: false,
                        error: {
                            message: "Academy not created",
                        }
                    }
                    return callback(res, null);
                });

            }

        }
        catch (error) {
            console.log(error);
            let res = {
                success: false,
                error: {
                    message: "Academy not created",
                }
            }
            return callback(res, null);
        }
    });
}