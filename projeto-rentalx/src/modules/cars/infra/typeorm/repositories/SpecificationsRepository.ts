import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { dataSource } from '@shared/infra/typeorm/database/data-source';
import { In, Repository } from 'typeorm';
import { Specification } from "../entities/Specification";

export class SpecificationsRepository implements ISpecificationsRepository{
  
  private repository: Repository<Specification>
  
  constructor(){
    this.repository = dataSource.getRepository(Specification)
  }
  async create({ name, description }: ICreateSpecificationDTO) { 
    const specification = this.repository.create({
      name,
      description
    })
    await this.repository.save(specification)
  };
  async findByName(name: string){
    const specification = await this.repository.findOne({
      where:{
        name
      }
    })
    return specification
  };
  async all(){
    const listSpesifications =  await this.repository.find()
    return listSpesifications
  };

  async findByIds(ids: string[]){
    const specifications = await this.repository.findBy({
      id: In(ids)
    })

    return specifications;
  }

}