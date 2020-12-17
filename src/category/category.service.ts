import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/category.entity';

@Injectable()
export class CategoryService {
    async insert(name: string): Promise<CategoryEntity> {
        const cat = new CategoryEntity();
        cat.name = name;
        await cat.save();
        return cat;
    }
    async delete(id: string): Promise<void> {
        await CategoryEntity.delete(id);
    }
    async getAllTasks(): Promise<CategoryEntity[] > {
        return CategoryEntity.find();
      }
}
