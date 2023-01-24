import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { FindAvailableCarsUseCase } from "./FindAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let findAvailableUseCase: FindAvailableCarsUseCase;


describe("List Cars", () => {
  beforeEach(()=>{
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    findAvailableUseCase = new FindAvailableCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able list car available true",async()=>{
    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-2",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-84745",
      name: "Car 1"
    })

    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-1",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-847456",
      name: "Car 2"
    })

    const availableTrue = await findAvailableUseCase.execute({});

    expect(availableTrue).toHaveLength(2);
  });

  it("should be able list car by name",async()=>{
    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-2",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-84745",
      name: "Car 1"
    })

    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-1",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-847456",
      name: "Car 2"
    })

    const findByName = await findAvailableUseCase.execute({name: 'Car 1'});
    expect(findByName).toHaveLength(1);
  });

  it("should be able list car by brand",async()=>{
    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-2",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-84745",
      name: "Car 1"
    })

    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-1",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-847456",
      name: "Car 2"
    })

    const findByBrand = await findAvailableUseCase.execute({brand: 'brand'});
    expect(findByBrand).toHaveLength(2);
  });

  it("should be able list car by category id",async()=>{
    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-2",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-84745",
      name: "Car 1"
    })

    await carsRepositoryInMemory.create({
      brand: "brand",
      category: "category_i-1",
      daily_rate: 5,
      description: "sample description",
      fine_amount: 2,
      license_plate: "ABCD-847456",
      name: "Car 2"
    })

    const findByCategoryId = await findAvailableUseCase.execute({category_id: "category_i-1"});
    expect(findByCategoryId).toHaveLength(1);
  })
})