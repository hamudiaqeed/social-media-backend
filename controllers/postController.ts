import {Post} from '../models/post';

import {Request, Response, NextFunction} from 'express';

export const getPosts = async (req: any, res: Response, next: NextFunction) => {
    try {
        const posts = await Post.find({user: req.user._id})

        return res.status(200).json({
            message: 'Posts fetched',
            posts,
        })
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (req: any, res: Response, next: NextFunction) => {
    const post = req.body.post;
    const username = req.user.username;

    try {
        const newPost = new Post({
            body: post,
            username,
            user: req.user
        })
        await newPost.save();
        return res.status(200).json({
            message: 'Post created',
            newPost
        })
    } catch (error) {
        console.log(error)
    }
}