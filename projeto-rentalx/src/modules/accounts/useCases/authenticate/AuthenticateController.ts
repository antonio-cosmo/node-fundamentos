import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUsecase } from "./AuthenticateUseCase";

class AuthenticateUseController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authenticateUseCase = container.resolve(AuthenticateUsecase);

        const token = await authenticateUseCase.execute({email, password});

        return res.status(200).json(token);
    }
}

export { AuthenticateUseController}