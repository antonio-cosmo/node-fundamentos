import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
interface IRequest{
    id: string,
    avatarUrl: string
}
@injectable()
class UpdateUserAvatarUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute({id, avatarUrl}:IRequest){
        const userUpdate = await this.usersRepository.findById(id);

        userUpdate.avarta_url = avatarUrl;

        await this.usersRepository.create(userUpdate);
    }
}

export { UpdateUserAvatarUseCase }