import { Category } from "../infra/typeorm/entities/Category";
import { Specification } from "../infra/typeorm/entities/Specification";

export interface ICreateCarsDto{
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string ;
  category_id: string;
  category:Category
}