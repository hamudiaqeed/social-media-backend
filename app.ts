import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';
import { commentRoutes } from './routes/commentRoutes';
import { postRoutes } from './routes/postRoutes';
import { userRoutes } from './routes/userRoutes';
import {Request, Response, NextFunction} from 'express';
import validateEnv from './utils/validateEnv';

function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
}

validateEnv();
const app = express();

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(loggerMiddleware);
app.use('/auth', authRoutes);
app.use('/comment', commentRoutes);
app.use('/post', postRoutes);
app.use('/profile', userRoutes);

mongoose.connect('mongodb://localhost:27017/social-media-backend')
    .then(() => app.listen(process.env.PORT))
    .catch(err => console.log(err))