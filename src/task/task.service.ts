import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/category.entity';
import ItemEntity from 'src/db/item.entity';
import TagEntity from 'src/db/tag.entity';
import TaskEntity from 'src/db/task.entity';
import UserEntity from 'src/db/user.entity';
import { CreateTaskDto,UpdateItemDto,UpdateTaskDto,DeleteItemDto} from './creat-task.dto';

@Injectable()
export class TaskService {

    async insert(TaskDetails: CreateTaskDto): Promise<TaskEntity> {
        const { name , userID , catagoryID,tagIDs,items } = TaskDetails;
        const task = new TaskEntity();
        task.name = name;
        task.user = await UserEntity.findOne(userID);
        task.catagory = await CategoryEntity.findOne(catagoryID) ;
        task.tags=[];
        task.items=[];
        for ( let i = 0; i < tagIDs.length ; i++)
        {
                 const tag = await TagEntity.findOne(tagIDs[i]);
                 task.tags.push(tag);
        }
        for ( let i = 0; i < items.length ; i++)
        {
                 const item = new ItemEntity();
                 item.name = items[i];
                 item.save();
                 task.tags.push(item);
        }
        await task.save();
        return task;
      }

      async update(TaskDetails: UpdateTaskDto): Promise<TaskEntity>{
        const { name ,ID,items,tags,catagoryID } = TaskDetails;
        let task = await TaskEntity.findOne(ID)
        task.catagory = await CategoryEntity.findOne(catagoryID) ;
        task.name = name;
        task.tags=[];
        task.items=[];
        for ( let i = 0; i < tags.length ; i++)
        {
                 task.tags[i].name = tags[i];
        }
        for ( let i = 0; i < items.length ; i++)
        {
                task.items[i].name = items[i];
                //  const item = new ItemEntity();
                //  item.name = items[i];
                //  task.tags.push(item);
        }
        await TaskEntity.save(task)
        return task
    
      }
      async updateItem(TaskDetails: UpdateItemDto): Promise<TaskEntity>{
        const { name ,taskID,ItemID } = TaskDetails;
        let task = await TaskEntity.findOne(taskID)
        task.items[ItemID].name = name;
        await TaskEntity.save(task);
        return task;
      }
      async deleteItem(id :string): Promise<void>{
        await ItemEntity.delete(id);
      }

      
      async delete(id :string):Promise<void>{
        await TaskEntity.delete(id);
      }
      async getAllTasks(): Promise<TaskEntity[] > {
        return TaskEntity.find();
      }
}
