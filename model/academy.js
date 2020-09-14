const mongoose = require("mongoose");
const constants = require("../constants");
var Schema = mongoose.Schema;

const academySchema = new Schema({
    academyName: {
        type: String,
        required: true
    },
    directorName:{
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
        },
        street: {
            type: String,
        },
        country: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        pincode: {
            type: String,
        },
        landmark: {
            type: String,
        },
    },
    totalCourseCount: {
        type: Number
    },
    status:{
        type: String,
        enum: ['active', 'inactive', 'delete'],
    }

});

const Academy = mongoose.model("academy", academySchema);

module.exports = { Academy };