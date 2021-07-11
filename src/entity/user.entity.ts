import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ITask, IUser, UserReturn } from '../common/types';
import { Task } from './task.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 40 })
  name: string;

  @Column('varchar', { length: 40 })
  login: string;

  @Column('varchar', { length: 140 })
  password: string;

  @OneToMany(() => Task, (task) => task.userId)
  tasks: ITask[];

  static toResponse(user: IUser): UserReturn {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
