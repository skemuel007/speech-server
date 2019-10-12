//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/speech_api';
// mongoose.connect(mongoDB);
mongoose.connect(process.env.MONGODB_URI || mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;