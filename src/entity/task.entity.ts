import {
  PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import { Board } from './board.entity';
import { User } from './user.entity';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 40 })
  title: string;

  @Column('integer')
  order: number;

  @Column('varchar', { length: 140 })
  description: string;

  @ManyToOne(() => User, (user) => user.tasks, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'userId' })
  user: string | null;

  @ManyToOne(() => Board, (board) => board.tasks, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'boardId' })
  board: string | null;

  @Column('uuid', { nullable: true })
  boardId: string;

  @Column('uuid', { nullable: true })
  columnId: string | null = null;

  @Column('uuid', { nullable: true })
  userId: string | null = null;
}
