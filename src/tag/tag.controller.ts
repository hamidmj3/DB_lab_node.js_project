import { Body, Controller, Get, ParseIntPipe, Post, Put,Delete,Query,UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

  @Post()
  postTask( @Query('name') name) {
    return this.tagService.insert(name);
  }
  @Delete()
  deleteTask(@Query('id') id){
    return this.tagService.delete(id)
  }
  @Get()
  getAll() {
    return this.tagService.getAllTasks();
  }
}
