import { Body, Controller, Get, ParseIntPipe, Post, Put,Delete,Query,UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoryService } from './category.service';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

  @Post()
  postTask( @Query('name') name) {
    return this.categoryService.insert(name);
  }
  @Delete()
  deleteTask(@Query('id') id){
    return this.categoryService.delete(id)
  }
  @Get()
  getAll() {
    return this.categoryService.getAllTasks();
  }
}
