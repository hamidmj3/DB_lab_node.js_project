import { Injectable } from '@nestjs/common';
import TagEntity from 'src/db/tag.entity';

@Injectable()
export class TagService {
    async insert(name: string): Promise<TagEntity> {
        const tag = new TagEntity();
        tag.name = name;
        await tag.save();
        return tag;
    }
    async delete(id: string): Promise<void> {
        await TagEntity.delete(id);
    }
    async getAllTasks(): Promise<TagEntity[] > {
        return TagEntity.find();
      }
}
