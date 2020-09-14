const {register,signIn} = require('./user');
const {academyCreat} = require('./academy');
const {courseCreat,courseUpdate} = require('./courses');



module.exports = {
  register,
  signIn,
  academyCreat,
  courseCreat,
  courseUpdate
  }