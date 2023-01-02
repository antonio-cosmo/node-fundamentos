import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListUsersUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute(){
        return this.usersRepository.findAll();
    }
}