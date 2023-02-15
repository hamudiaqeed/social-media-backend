import express from 'express';

const router = express.Router();

import auth from '../middlewares/is-auth';

//get user profile, including posts etc

//search user

//update profile 

//add friend

//unfriend

//get friends

//get friend by id

export {router as userRoutes}