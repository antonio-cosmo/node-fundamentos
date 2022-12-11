import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController{
    async handle(req: Request, res: Response){
        const {id} =  req.user;
        const fileNmae = req.file.filename
        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

        await updateUserAvatarUseCase.execute({id, avatarUrl: fileNmae})
    }
}

export { UpdateUserAvatarController}