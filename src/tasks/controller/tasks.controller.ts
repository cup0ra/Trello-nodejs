import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from 'src/common/exeption';
import { ITask } from 'src/common/types';
import { TasksService } from '../service/tasks.service';

@Controller('/boards/:boardId/tasks')
@UseGuards(AuthGuard('jwt'))
@UseFilters(new HttpExceptionFilter())
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Post()
  async create(@Param('boardId') boardId: string, @Body() createTaskDto: ITask) {
    return await this.taskService.addTask({ ...createTaskDto, boardId });
  }

  @Get()
  async findAll() {
    return await this.taskService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.taskService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: ITask) {
    return await this.taskService.updateTask({ ...updateTaskDto, id });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.deleteTask(id);
  }
}
