const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    difficulty: { type: String, required: true },
    topic: { type: String, required: true },
});

module.exports = mongoose.model('Question', questionSchema);
