import { Specification } from "../infra/typeorm/entities/Specification"

export interface ICreateSpecificationDTO{
  name: string
  description: string
}

export interface ISpecificationsRepository {

  create: ({name, description}:ICreateSpecificationDTO) => void
  
  findByName: (name: string)=> Promise<Specification>

  all: () => Promise<Specification[]>
}