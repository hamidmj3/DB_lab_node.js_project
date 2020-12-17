import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany,OneToOne } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import TaskEntity from './task.entity';
import TagEntity from './tag.entity';

@Entity()
export default class CategoryEntity extends BaseEntity 
{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => TaskEntity, task =>task.catagory)
    task: TagEntity
}