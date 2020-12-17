import { Body, Controller, Get, ParseIntPipe, Post, Put,Delete,Query,UseGuards } from '@nestjs/common';
import { CreateTaskDto, UpdateItemDto, UpdateTaskDto } from './creat-task.dto';
import { TaskService } from './task.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
  @Post()
  postTask( @Body() task: CreateTaskDto) {
    return this.taskService.insert(task);
  }
  @Get()
  getAll() {
    return this.taskService.getAllTasks();
  }
  @Put()
  updateTask(@Body() task: UpdateTaskDto){
      return this.taskService.update(task)

  }
  @Delete()
  deleteTask(@Query('id') id){
    return this.taskService.delete(id)
  }
  @Delete('item')
  deleteItem(@Query('id') id){
    return this.taskService.deleteItem(id)
  }
  @Put()
  updateItem(@Body() task: UpdateItemDto){
      return this.taskService.updateItem(task)

  }
}
