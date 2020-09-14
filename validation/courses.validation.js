const Joi = require('joi');
const constants = require('../constants');



const coursesValidation = Joi.object({
    coursesName: Joi.string().required(),
    totalCount: Joi.number().required(),
    totalAbsent: Joi.number().required(),
    totalPresent: Joi.number().required(),
    sections: Joi.array().items(Joi.object({
        sectionId: Joi.string()
    })).optional().allow(),
    fees: Joi.object({
        completed: Joi.number(),
        pending: Joi.number()
    }),
    subjects: Joi.array().items(Joi.object({
        subjectName: Joi.string(),
        subjectId: Joi.string()
    })).optional().allow(),
    academyId: Joi.string(),
    createdBy: Joi.object({
        userName: Joi.string(),
        userId: Joi.string()
    }),
    coursesType: Joi.string().valid(constants.COURSES_TYPE.SCHOOL, constants.COURSES_TYPE.COLLEGE).required(),
    status: Joi.string().valid('active', 'inactive', 'delete').optional().default('active')
})

module.exports = {
    coursesValidation
}
