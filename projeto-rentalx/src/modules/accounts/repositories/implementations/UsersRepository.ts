import { Repository } from "typeorm";
import { dataSource } from "../../../../database/data-source";
import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import {hash} from 'bcrypt'

export class UsersRepository implements IUsersRepository{
    readonly userRepository: Repository<User>

    constructor(){
        this.userRepository = dataSource.getRepository(User)
    }
    async create({name, email, password, driver_licenses}:ICreateUserDto){

        const userAlreadyExists = await this.findByEmail(email);

        if(userAlreadyExists)  throw new Error("Usuario ja existe");

        const passwordHash = await hash(password, 8);

        const createUser = this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_licenses,
            isAdmin: false,
        });

        this.userRepository.save(createUser);
    }

    async findByEmail(email: string){
        return this.userRepository.findOne({where:{email}})
    }

    async findAll(){
        return await this.userRepository.find();
    }
}