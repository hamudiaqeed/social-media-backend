import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

const auth = async (req: any, res: Response, next: NextFunction) =>{
    try {
        const token = req.header("Authorization")

        if(!token)  return res.status(500).json({msg: "Not Valid"})

        const decoded: any = jwt.verify(token.split(' ')[1], process.env.JWT_PASSWORD || '')

        if(!decoded)  return res.status(500).json({msg: "Not Valid"})
        
        const user = await User.findOne({_id: decoded.userId})
       
        req.user = user;
        
        next();
    } catch (err: any) {
        return res.status(500).json({msg: err.message})
    }
}

export default auth;