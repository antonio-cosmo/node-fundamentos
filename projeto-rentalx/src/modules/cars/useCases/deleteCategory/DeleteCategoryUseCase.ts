import { inject, injectable, injectAll } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class DeleteCategoryUseCase{
    constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository){}
    async execute(name: string){
        await this.categoriesRepository.delete(name)
    }
}