import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { deleteFile } from "@util/file";
import { inject, injectable } from "tsyringe";

interface IRequest{
    id: string,
    avatarFile: string
}
@injectable()
class UpdateUserAvatarUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute({id, avatarFile}:IRequest){
        const userUpdate = await this.usersRepository.findById(id);

        if(userUpdate.avatar_file) await deleteFile(userUpdate.avatar_file);
        
        userUpdate.avatar_file = avatarFile;

        await this.usersRepository.update(userUpdate);
    }
}

export { UpdateUserAvatarUseCase }