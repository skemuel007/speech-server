const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const VoiceSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    created_at: {
        type: Date,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Voice', VoiceSchema);