import { Repository } from "typeorm";
import { dataSource } from "../../../../database/data-source";
import { ICreateUserDto } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import {hash} from 'bcrypt'
import { IUpdateUserDto } from "../../dto/IUpdateUserDto";

export class UsersRepository implements IUsersRepository{
    readonly repository: Repository<User>

    constructor(){
        this.repository = dataSource.getRepository(User)
    }
    async create({name, email, password, driver_licenses}:ICreateUserDto){

        const userAlreadyExists = await this.findByEmail(email);

        if(userAlreadyExists)  throw new Error("Usuario ja existe");

        const passwordHash = await hash(password, 8);

        const createUser = this.repository.create({
            name,
            email,
            password: passwordHash,
            driver_licenses,
            isAdmin: false,
        });

        await this.repository.save(createUser);
    }
    async update(data:IUpdateUserDto){
        await this.repository.update(data.id,{...data})
    }
    async findByEmail(email: string){
        return this.repository.findOne({where:{email}})
    }

    async findAll(){
        return await this.repository.find();
    }

    async findById(id: string){
        const user = await this.repository.findOneBy({id});

        return user;
    }
}