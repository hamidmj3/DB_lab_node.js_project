import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import TaskEntity from './task.entity'

@Entity()
export default class ItemEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
    name: string;

  @ManyToOne(type => TaskEntity, task => task.items)
  task: TaskEntity;


}