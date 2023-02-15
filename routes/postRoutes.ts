import express from 'express';

const router = express.Router();

import { getPosts, createPost } from '../controllers/postController';
import auth from '../middlewares/is-auth';

router.get('/', auth, getPosts);

router.post('/', auth, createPost);

//get post

//edit post

//delete post

//like post
//unlike post

//get user posts

export {router as postRoutes}