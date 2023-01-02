
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUsersUseCase } from './CreateUsersUseCase';


let createUsersUseCase: CreateUsersUseCase;
let usersRepository: UsersRepositoryInMemory;

describe('Create user',() =>{

  beforeEach(()=>{
    usersRepository = new UsersRepositoryInMemory();
    createUsersUseCase = new CreateUsersUseCase(usersRepository);
  })

  it('should be able create new user', async () =>{
    const user = {
      name: 'Cosmo',
      email: 'cosmo@email.com',
      password: '12345',
      driver_licenses: 'AB000C',
    }
    await createUsersUseCase.execute({
      name: user.name,
      email: user.email,
      driver_licenses: user.driver_licenses,
      password: user.password
    })

    const userExists = await usersRepository.findByEmail(user.email);
    expect(userExists).toHaveProperty('id')
  })

  
})