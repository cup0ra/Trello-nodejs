import {
  PrimaryGeneratedColumn, Column, Entity, BaseEntity, OneToMany,
} from 'typeorm';
import { Columns } from '../resources/boards/model';
import { Task } from './task.entity';

@Entity({ name: 'boards' })
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 40 })
  title: string;

  @Column('jsonb', { nullable: true })
  columns: Columns [];

  @OneToMany(() => Task, (task) => task.boardId)
  tasks: Task[];
}
