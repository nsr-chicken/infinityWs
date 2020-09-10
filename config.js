var config = module.exports;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv = require('dotenv').config()


// Equivalent to the above code
mongoose.connect(process.env.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true,
});