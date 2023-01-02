import { ICreateUserDto } from "@modules/accounts/dto/ICreateUserDto";
import { IUpdateUserDto } from "@modules/accounts/dto/IUpdateUserDto";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { hash } from "bcrypt";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository{

  private users: User[] = []
  async create({driver_licenses, email, name,password }: ICreateUserDto):Promise<void>{
    const user = new User();
    const passwordHash = await hash(password, 8);

    Object.assign(user, {
      name,
      email,
      password: passwordHash,
      driver_licenses,
      isAdmin: false
    });

    this.users.push(user);
  };
  async update(data: IUpdateUserDto):Promise<void>{

  };
  async findByEmail(email: string):Promise<User>{
    const user = this.users.find(user => user.email === email);

    return user
  };
  async findAll():Promise<User[]> {
    return this.users
  };
  async findById(id: string):Promise<User>{
    return this.users.find(user => user.id === id)
  };

}