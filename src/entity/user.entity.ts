import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser, UserReturn } from '../resources/users/model';
import { Task } from './task.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 40 })
  name: string;

  @Column('varchar', { length: 40 })
  login: string;

  @Column('varchar', { length: 40 })
  password: string;

  @OneToMany(() => Task, (task) => task.userId)
  tasks: Task[];

  static toResponse(user: IUser): UserReturn {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
