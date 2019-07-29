const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MONGOOSE/MODEL CONFIG BLOG
const blogSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    image: String,
    author: String,
    intro: String,
    category: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Blog", blogSchema);