import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/AppError";
import { CreateCarsUseCase } from "./CreateCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarsUseCase: CreateCarsUseCase;

describe("Create Cars", ()=>{
  beforeEach(()=>{
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarsUseCase = new CreateCarsUseCase(carsRepositoryInMemory);
  })
  it('should be able create new car', async ()=> {
    const car = {
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category: 'category'
    }

    await createCarsUseCase.execute(car);

    const findCar = await carsRepositoryInMemory.findByLicensePlate(car.license_plate);
    
    expect(findCar).toHaveProperty('id');
    
  });

  it('should no be able create new car if already exists',()=>{
    expect(async()=>{
      const car1 = {
        name: 'Name Car2',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-12345',
        fine_amount: 60,
        brand: 'Brand',
        category: 'category'
      }
  
      await createCarsUseCase.execute(car1);

      const car2 = {
        name: 'Name Car2',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-12345',
        fine_amount: 60,
        brand: 'Brand',
        category: 'category'
      }
  
      await createCarsUseCase.execute(car2);
    }).rejects.toBeInstanceOf(AppError)
  })
})