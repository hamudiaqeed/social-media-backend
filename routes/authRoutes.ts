import express from 'express';

const router = express.Router();

import {signup, login} from '../controllers/authController';

router.put('/signup', signup);

router.post('/login', login);

export {router as authRoutes}