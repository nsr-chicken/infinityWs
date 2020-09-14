const validator = require('express-joi-validation').createValidator({})
var { signInValidation,SignupValidation } = require('./user.validator');
var { coursesValidation } = require('./courses.validation');
var { academyValidation } = require('./academy.validation');
module.exports = {
    validator,
    signInValidation,
    SignupValidation,
    coursesValidation,
    academyValidation
};