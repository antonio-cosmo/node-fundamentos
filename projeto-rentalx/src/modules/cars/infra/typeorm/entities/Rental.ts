import {v4 as uuidV4} from 'uuid';
import { Car } from './Car';
import {User} from '../../../../accounts/infra/typeorm/entities/User'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('rentals')
export class Rental {
  @PrimaryColumn({type:'uuid'})
  id?: string;

  @ManyToOne(()=> Car)
  @JoinColumn({name: 'car_id'})
  car: Car;

  @Column({type: 'uuid'})
  car_id: string;
  
  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user: User;

  @Column({type: 'uuid'})
  user_id: string;

  @Column({type: 'timestamp', default:'now()'})
  start_date: Date;

  @Column({type: 'timestamp'})
  end_date: Date;

  @Column({type: 'timestamp'})
  expected_return_date: Date;

  @Column({type:'numeric'})
  total: number

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if(!this.id){
      this.id = uuidV4();
    }
  }
}