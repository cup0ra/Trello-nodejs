import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITask } from '../../common/types';
import { Task } from '../../entity/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private readonly repo: Repository<Task>) {}

  public getAll = async (): Promise<ITask[]> => this.repo.find();

  public getById = async (id: string): Promise<Task | undefined> => {
    const task = await this.repo.findOne(id);
    if (!task) throw new HttpException(`Task '${id}' not found`, HttpStatus.NOT_FOUND);
    return task;
  };
  public addTask = async (task: ITask): Promise<Task> => {
    const newTask = this.repo.create(task);
    await this.repo.save(newTask);
    return newTask;
  };

  public updateTask = async (task: ITask): Promise<ITask> => {
    await this.repo.update(task.id, task);
    const taskFind = await this.repo.findOne(task.id);
    if (!taskFind) throw new HttpException(`Task '${task.id}' not found`, HttpStatus.NOT_FOUND);
    return taskFind;
  };

  public deleteTask = async (id: string): Promise<void> => {
    const deleteResponse = await this.repo.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException(`Task '${id}' not found`, HttpStatus.BAD_REQUEST);
    }
  };
}
