import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/AppError";
import { CreateUsersUseCase } from "../createUsers/CreateUsersUseCase";
import { AuthenticateUsecase } from "./AuthenticateUseCase";




let createUsersUseCase: CreateUsersUseCase;
let authenticateUseCase: AuthenticateUsecase
let usersRepository: UsersRepositoryInMemory;

describe('Authenticate',() =>{

  beforeEach(()=>{
    usersRepository = new UsersRepositoryInMemory();
    createUsersUseCase = new CreateUsersUseCase(usersRepository);
    authenticateUseCase = new AuthenticateUsecase(usersRepository)
  })

  it('should be able authenticate', async () =>{
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

    const userAuthenticate = await authenticateUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(userAuthenticate).toHaveProperty('token')
  });

  it('should be able email incorrect', () =>{
    expect(async () => {
      const user = {
        name: 'Cosmo',
        email: 'teste@email.com',
        password: '12345',
        driver_licenses: 'AB000C',
      }
  
      await createUsersUseCase.execute({
        name: user.name,
        email: user.email,
        driver_licenses: user.driver_licenses,
        password: user.password
      })
  
      const userAuthenticate = await authenticateUseCase.execute({
        email: 'incorret',
        password: user.password
      });

      console.log(userAuthenticate)
    }).rejects.toBeInstanceOf(AppError)
  });

  it('should be able password', async () =>{
    expect(async () => {
      const user = {
        name: 'Test password',
        email: 'test_password@email.com',
        password: '1234',
        driver_licenses: 'AB000C',
      }
  
      await createUsersUseCase.execute({
        name: user.name,
        email: user.email,
        driver_licenses: user.driver_licenses,
        password: user.password
      })
  
      const userAuthenticate = await authenticateUseCase.execute({
        email: user.email,
        password: '1234567'
      });

      console.log(userAuthenticate)
    }).rejects.toBeInstanceOf(AppError)
  })

  
})