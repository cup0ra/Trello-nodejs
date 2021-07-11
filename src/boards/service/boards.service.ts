import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IBoard } from '../../common/types';
import { Board } from '../../entity/board.entity';

@Injectable()
export class BoardsService {
  constructor(@InjectRepository(Board) private readonly repo: Repository<Board>) {}
  public getAll = async (): Promise<Board[]> => this.repo.find();

  public getById = async (id: string): Promise<Board | undefined> => {
    const board = await this.repo.findOne(id);
    if (!board) throw new HttpException(`Board '${id}' not found`, HttpStatus.NOT_FOUND);
    return board;
  };

  public addBoard = async (board: Omit<Board, 'id'>): Promise<Board> => {
    const newBoard = this.repo.create(board);
    await this.repo.save(newBoard);
    return newBoard;
  };

  public updateBoard = async (id: string, board: IBoard): Promise<IBoard> => {
    await this.repo.update(id, board);
    const boardFind = await this.repo.findOne(id);
    if (!boardFind) throw new HttpException(`Board '${board.id}' not found`, HttpStatus.NOT_FOUND);
    return boardFind;
  };

  public deleteBoard = async (id: string): Promise<void> => {
    const boardFind = await this.repo.findOne(id);
    if (!boardFind) {
      throw new HttpException(`Board '${id}' not found`, HttpStatus.BAD_REQUEST);
    }
    await this.repo.delete(id);
  };
}
