import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/AppError";

export async function ensureAdmin(req:Request, res: Response, next: NextFunction){
  const {id} = req.user;
  const userRepository = new UsersRepository();

  if(!id) throw new AppError('Identifier missing', 401);

  const user =  await userRepository.findById(id);

  if(!user.isAdmin) throw new AppError("User isn't admin");

  return next();

}
  