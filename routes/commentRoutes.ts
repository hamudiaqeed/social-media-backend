import express from 'express';

const router = express.Router();

import auth from '../middlewares/is-auth';

/*
COMMENTS

create comment
updatecomment
like comment
unlike comment
delete comment
*/

export {router as commentRoutes}