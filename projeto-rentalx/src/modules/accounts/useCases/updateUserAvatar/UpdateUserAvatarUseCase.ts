import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../util/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";
interface IRequest{
    id: string,
    avatarFile: string
}
@injectable()
class UpdateUserAvatarUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute({id, avatarFile}:IRequest){
        const userUpdate = await this.usersRepository.findById(id);

        if(userUpdate.avatar_file) deleteFile(userUpdate.avatar_file);
        
        userUpdate.avatar_file = avatarFile;

        await this.usersRepository.update(userUpdate);
    }
}

export { UpdateUserAvatarUseCase }