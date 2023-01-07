import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
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
      category_id: 'category'
    }

    await createCarsUseCase.execute(car);

    const findCar = await carsRepositoryInMemory.findLicencePlate(car.license_plate);
    
    expect(findCar).toHaveProperty('id');
    
  })
})