import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ListUsersUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute(){
        return this.usersRepository.findAll();
    }
}