import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {authRoutes} from './routes/authRoutes';
import {userRoutes} from './routes/userRoutes';
import {Request, Response, NextFunction} from 'express';

const app = express();

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/feed', userRoutes);

mongoose.connect('mongodb://localhost:27017/social-media-backend')
    .then(() => app.listen(8080))
    .catch(err => console.log(err))