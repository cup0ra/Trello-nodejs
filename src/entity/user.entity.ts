import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IUser, UserReturn } from '../resources/users/model';
import { Task } from './task.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id = '';

  @Column('varchar', { length: 40 })
  name = '';

  @Column('varchar', { length: 40 })
  login = '';

  @Column('varchar', { length: 40 })
  password = '';

  @OneToMany(() => Task, (task) => task.userId)
  tasks: Task[];

  static toResponse(user: IUser): UserReturn {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
