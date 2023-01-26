import { Car } from './Car';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from 'uuid';
@Entity('car_images')
export class CarImage{

  @PrimaryColumn({type: 'uuid'})
  id?: string;

  @ManyToOne(()=> Car)
  @JoinColumn({name: 'car_id'})
  car: Car;

  @Column({type: 'uuid'})
  car_id: string;

  @Column({type: 'varchar'})
  path:string;

  @CreateDateColumn({type: 'timestamp', default: 'now()'})
  created_at?: Date;


  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }

}