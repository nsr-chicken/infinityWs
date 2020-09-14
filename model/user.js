const mongoose = require('mongoose');
const constants = require('../constants');
var Schema = mongoose.Schema;


const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    enum: [constants.USER_TYPE.SUPPER_ADMIN, constants.USER_TYPE.ADMIN, constants.USER_TYPE.TEACHER, constants.USER_TYPE.PARENT, constants.USER_TYPE.STUDENT],
  },
  phoneNumber: {
    type: Number,
  },
  academyId: {
    type: String,
    required: true,
  },
  address: {
    buildingNumber: {
      type: String,
    },
    address: {
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
  createdBy: {
    userName: {
      type: String,
      // required: true
    },
    userId: {
      type: String,
      // required: true
    },
  },
  geoLocation: {
    type: {
      type: String,
      default: "Point",
      enum: "Point"
    },
    coordinates: [Number],
  },
  status:{
    type: String,
    enum: ['active', 'inactive', 'delete'],
}
});

const User = mongoose.model('user', UserSchema);

module.exports = { User }