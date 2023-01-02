import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListSpecificationUseCase{
    constructor(@inject('SpecificationsRepository') private listSpecificationRepository: ISpecificationsRepository){}
    async execute(){
        return await this.listSpecificationRepository.all()
    }
}