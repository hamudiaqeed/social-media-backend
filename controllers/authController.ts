import {User} from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

import {Request, Response, NextFunction} from 'express';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(404).json({message: 'user not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'email or password incorrect'});
        }

        const token = jwt.sign(
            {
              email: user.email,
              userId: user._id.toString()
            },
            process.env.JWT_PASSWORD as string,
            { expiresIn: '1d' }
        );

        res.status(200).json({ token, user });
    } catch (err) {
        console.log(err);
    }
};

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const username = req.body.username;
    const gender = req.body.gender;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user: User = new User({
            email,
            password: hashedPassword,
            name,
            username,
            gender
        })

        await user.save()

        user.password = '';

        res.status(200).json({
            message: 'User created',
            user
        })
    } catch (err) {
        console.log(err);
    }
};