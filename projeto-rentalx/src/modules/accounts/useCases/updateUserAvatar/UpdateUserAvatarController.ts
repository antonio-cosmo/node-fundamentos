import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController{
    async handle(req: Request, res: Response){
        const {id} =  req.user;
        const filePath = req.file.path

        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

        await updateUserAvatarUseCase.execute({id, avatarFile: filePath})

        return res.status(204).json({message: 'Update avatar'})
    }
}

export { UpdateUserAvatarController}