const Joi = require('joi')
const constants = require('../constants');


const signInValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});


const SignupValidation = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  userType:Joi.string().valid(constants.USER_TYPE.SUPPER_ADMIN, constants.USER_TYPE.ADMIN, constants.USER_TYPE.TEACHER, constants.USER_TYPE.PARENT, constants.USER_TYPE.STUDENT).required(),
  phoneNumber: Joi.string().optional(),
  academyId: Joi.string().required(),
  address: {
    buildingNumber: Joi.string().optional(),
    address: Joi.string().optional(),
    street: Joi.string().optional(),
    country: Joi.string().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    pincode: Joi.string().optional(),
    landmark: Joi.string().optional(),
  },
  createdBy: Joi.object({
    userName: Joi.string().optional(),
    userId: Joi.string().optional(),
  }),

  status: Joi.string().valid('active', 'inactive', 'delete').optional().default('active')
})

module.exports = {
  signInValidation,
  SignupValidation
}
