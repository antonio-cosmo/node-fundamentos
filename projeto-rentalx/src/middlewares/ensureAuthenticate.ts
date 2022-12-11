import { NextFunction, Request, Response } from "express";
import * as dotenv from 'dotenv'
import {verify} from 'jsonwebtoken';
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../shared/AppError";
dotenv.config();
const authKeyPublic = process.env.AUTH_KEY_PUBLIC;

interface IPayload{
    sub: string
}


async function ensureAuthenticate(req:Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader) throw new AppError('Token missing', 401);
    const [, token] = authHeader.split(' ');

    try{
        const {sub: user_id} = verify(token, authKeyPublic) as IPayload;
        const usersRepository = new UsersRepository();

        const userAlredExist = await usersRepository.findById(user_id);
        if(!userAlredExist) throw new AppError('User does not exist');

        req.user ={
            id: user_id
        }
        next();
    }catch(e){
        throw new AppError("Token invalid", 401)
    }

}

export {ensureAuthenticate}