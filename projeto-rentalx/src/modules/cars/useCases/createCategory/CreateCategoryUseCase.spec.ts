
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from '@shared/AppError';
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepositoryInMemory;

describe('Create category',() =>{

  beforeEach(()=>{
    categoriesRepository = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  })

  it('should be able create new category', async () =>{
    const category = {
      name: 'Category name test',
      description: 'category description test'
    }
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })

    const categoryExists = await categoriesRepository.findByName(category.name);
    expect(categoryExists).toHaveProperty('id')
  })

  it('shoul no be able create a category exists', async () => {
  
    expect(async ()=>{
      const category = {
        name: 'Category name test',
        description: 'category description test'
      }
      
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})