import { User } from './../entities/User';
import { ICreateUserDto } from "../dto/ICreateUserDto";

export interface IUsersRepository{
    create: (data: ICreateUserDto) => Promise<void>
    findByEmail: (email: string) => Promise<User>
    findAll: () => Promise<User[]>
    findById: (id: string) => Promise<User>
}