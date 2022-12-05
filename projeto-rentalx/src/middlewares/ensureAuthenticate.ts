import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../shared/AppError";

interface IPayload{
    sub: string
}
async function ensureAuthenticate(req:Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader) throw new AppError('Token missing', 401);
    const [, token] = authHeader.split(' ');

    try{
        const {sub: user_id} = verify(token, '31e9ddfd7983f1595982ea12e95038cb') as IPayload;
        const usersRepository = new UsersRepository();

        const userAlredExist = await usersRepository.findById(user_id);
        if(!userAlredExist) throw new AppError('User does not exist');

        next();
    }catch(e){
        throw new AppError("Token invalid", 401)
    }

}

export {ensureAuthenticate}