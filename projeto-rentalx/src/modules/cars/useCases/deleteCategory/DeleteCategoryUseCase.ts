import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable, injectAll } from "tsyringe";

@injectable()
export class DeleteCategoryUseCase{
    constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository){}
    async execute(name: string){
        await this.categoriesRepository.delete(name)
    }
}