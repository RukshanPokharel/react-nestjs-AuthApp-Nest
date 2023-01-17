/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Register {
  @PrimaryGeneratedColumn({
    name: 'user_id',
  })
  id: number;

  @Column()
  username: string;

  @Column({
    nullable: false,
    // default: ""
  })
  password: string;

  @Column()
  address: string;

  @Column()
  phone_no: number;
}
