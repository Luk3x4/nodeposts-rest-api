const { Schema, model } = require('mongoose')

const postSchema = Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('Post', postSchema)