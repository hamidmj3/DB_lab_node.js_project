import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany,OneToOne } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import CategoryEntity from './category.entity';
import TagEntity from './tag.entity';
import ItemEntity from './item.entity';
import { type } from 'os';

@Entity()
export default class TaskEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToOne(type => CategoryEntity,cat =>cat.task)
  catagory: CategoryEntity

  @OneToMany( type => ItemEntity , item => item.task)
  items: ItemEntity[];

  @OneToMany( type => TagEntity , item => item.task)
  tags: TagEntity[];

  @ManyToOne(type => UserEntity, user => user.items)
  user: UserEntity;

}