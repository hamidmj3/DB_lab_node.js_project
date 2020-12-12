import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import BookEntity from './book.entity';

@Entity()
export default class GenreEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToMany(type => BookEntity)
  books: BookEntity[];

}