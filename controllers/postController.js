const Post = require('../models/postModel.js')

exports.getAllPost = async (req, res, next) =>{
    try{
    const posts = await Post.find(req.query.title?{title: {$regex: `.*${req.query.title}.*`}}:{})
        .sort('-createDate')
            .select('-__v');

        res.status(200).json({
            status: 'success',
            length: posts.length,
            data: posts
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            msg: err
        })
    }
}

exports.getSinglePost = async (req, res, next) =>{
    try{
        const singlePost = await Post.findById(req.params.id).select('-__v');
        res.status(200).json({
            status: 'success',
            data: singlePost
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            msg: err
        })
    }
}

exports.createPost = async (req, res, next) => {
    try{
        const post = await Post.create(req.body);
        res.status(200).json({
            status: 'success',
            data: post
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            msg: err
        })
    }
}