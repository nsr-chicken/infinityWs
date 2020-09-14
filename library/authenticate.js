const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, function (
            err,
            decoded
        ) {
            if (decoded == undefined) {
                res.status(401).json({
                    success: false,
                    data: {
                        message: "UnAuthorized"
                    }

                });
            } else {
                console.log(decoded.id,'decoded.id---------')
                console.log(decoded.userName,'decoded.id---------')
                console.log(decoded.userType,'decoded.id---------')
                         console.log(decoded.academyId,'decoded.academyId---------')
                req.userId = decoded.id;
                req.userName = decoded.userName;
                req.userType = decoded.userType;
                req.academyId = decoded.academyId;
                next();
            }
        });
    } else {
        res.status(401).json({
            success: false,
            data: {
                message: "UnAuthorized"
            }
        });
    }
}

function permit(...allowedUser) {
    const isAllowed = (role) => allowedUser.indexOf(role) > -1;
    return (request, response, next) => {
        if (request.userType && isAllowed(request.userType)) {
            next();
        } else {
            response.status(401).json({
                message: "UnAuthorized",
            });
        }
    };
}

module.exports = { authenticate, permit };