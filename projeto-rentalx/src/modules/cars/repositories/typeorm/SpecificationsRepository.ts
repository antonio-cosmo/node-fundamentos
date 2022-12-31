import { Repository } from 'typeorm';
import { dataSource } from '../../../../database/data-source';
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

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

}