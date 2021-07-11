import { Columns, ITask } from '../common/types';
import { Task } from './task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 40 })
  title: string;

  @Column('jsonb', { nullable: true })
  columns: Columns[];

  @OneToMany(() => Task, (task) => task.boardId)
  tasks: ITask[];
}
