const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    namePicture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('article', ArticleSchema)