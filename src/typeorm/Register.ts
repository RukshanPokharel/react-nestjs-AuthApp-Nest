/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// defining a structure of a database table as entity.
@Entity()
export class Register {
  @PrimaryGeneratedColumn({
    name: 'user_id', //defining what the name of the column should be in table. if not provided like this then uses the 'id' defined below
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
