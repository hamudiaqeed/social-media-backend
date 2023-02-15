import express from 'express';

const router = express.Router();

import {signup, login} from '../controllers/authController';

router.put('/signup', signup);

router.post('/login', login);

//logout 

//change password

//generate access token 

export {router as authRoutes}