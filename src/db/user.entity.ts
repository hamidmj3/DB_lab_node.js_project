import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, PrimaryColumn } from 'typeorm';
import BookEntity from './book.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  username: string

  @Column({ length: 500 })
  name: string;

  @Column()
  password: string

  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];
}