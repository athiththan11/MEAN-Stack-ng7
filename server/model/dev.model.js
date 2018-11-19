// dev.model.js

const mongoose = require('mongoose');
const devSchema = mongoose.Schema({
    name: String,
    github: String,
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Dev', devSchema);
