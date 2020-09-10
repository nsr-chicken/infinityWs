const mongoose = require("mongoose");
const constants = require("../constants");
var Schema = mongoose.Schema;

const academySchema = new Schema({
    academyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    address: {
        doorNumber: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
        },
    },
    totalCourseCount: {
        type: Number
    }

});