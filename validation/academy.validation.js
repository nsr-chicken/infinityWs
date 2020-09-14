const Joi = require('joi')
const constants = require('../constants')

const academyValidation = Joi.object({
    academyName: Joi.string().required(),
    directorName: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    address: Joi.object({
        doorNumber: Joi.string(),
        street: Joi.string(),
        country: Joi.string(),
        state: Joi.string(),
        city: Joi.string(),
        pincode: Joi.string(),
        landmark: Joi.string(),
    }),
    totalCourseCount: Joi.number(),
    status: Joi.string().valid('active', 'inactive', 'delete').optional().default('active')

});

module.exports = {
    academyValidation
}
