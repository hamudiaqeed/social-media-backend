import express from 'express';

const router = express.Router();

import { getPosts, createPost } from '../controllers/userController';
import auth from '../middlewares/is-auth';

router.get('/', auth, getPosts);

router.post('/', auth, createPost)

//create post

//edit post

//delete post

//like post

/*
create post
get post
update post
get single post
delete post
like post
unlike post
get user posts
save post
unsave post
get saved posts
*/

//update profile 

//add friend

//unfriend

//get friends

//get friend by id


/*
COMMENTS

create comment
updatecomment
like comment
unlike comment
delete comment
*/

export {router as userRoutes}