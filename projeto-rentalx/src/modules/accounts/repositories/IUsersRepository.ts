import { User } from './../entities/User';
import { ICreateUserDto } from "../dto/ICreateUserDto";
import { IUpdateUserDto } from '../dto/IUpdateUserDto';

export interface IUsersRepository{
    create: (data: ICreateUserDto) => Promise<void>
    update: (data:IUpdateUserDto) => Promise<void>
    findByEmail: (email: string) => Promise<User>
    findAll: () => Promise<User[]>
    findById: (id: string) => Promise<User>
}