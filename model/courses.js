const mongoose = require("mongoose");
const constants = require("../constants");
var Schema = mongoose.Schema;

const coursesSchema = new Schema({
    coursesName: {
        type: String,
        required: true
    },
    totalCount: {
        type: Number
    },
    totalAbsent: {
        type: Number
    },
    totalPresent: {
        type: Number
    },
    sections: [
        {
            sectionId: {
                type: String
            },
        }
    ],
    fees: {
        completed: {
            type: String
        },
        pending: {
            type: String
        }
    },
    subjects: [
        {
            subjectName: {
                type: String
            },
            subjectId: {
                type: String
            },
        }
    ],
    academyId:{
        type: String
    },
    createdBy: {
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
    },
    coursesType: {
        type: String,
        enum: [constants.COURSES_TYPE.SCHOOL, constants.COURSES_TYPE.COLLEGE],
    },
});

const Course = mongoose.model("course", coursesSchema);

module.exports = { Course };
