const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')
const Post = require('../models/postModel.js')

router
    .route('/')
    .get(postController.getAllPost)
    .post(postController.createPost)

router.get('/:id', postController.getSinglePost)

module.exports = router