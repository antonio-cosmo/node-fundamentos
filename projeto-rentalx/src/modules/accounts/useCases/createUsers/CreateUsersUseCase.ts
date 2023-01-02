import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { IRequest } from "./CreateUsersController";
@injectable()
export class CreateUsersUseCase{
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute({name, email, password, driver_licenses}:IRequest){
        
        return await this.usersRepository.create({name, email, password, driver_licenses});
        
    }
}