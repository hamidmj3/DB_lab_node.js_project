import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, PrimaryColumn } from 'typeorm';
import BookEntity from './book.entity';
import TaskEntity from './task.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ length: 500 })
  username: string

  @Column({ length: 500 })
  name: string;

  @Column()
  password: string

  @OneToMany( type => TaskEntity , task => task.user)
  items: TaskEntity[];

// old part:
  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];
}