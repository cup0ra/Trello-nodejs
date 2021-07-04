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
import { IBoard } from '../../common/types';
import { Board } from '../../entity/board.entity';
import { BoardsService } from '../service/boards.service';

@Controller('boards')
@UseGuards(AuthGuard('jwt'))
@UseFilters(new HttpExceptionFilter())
export class BoardsController {
  constructor(private boardService: BoardsService) {}
  @Post()
  async create(@Body() createBoardDto: Board) {
    return await this.boardService.addBoard(createBoardDto);
  }

  @Get()
  async findAll() {
    return await this.boardService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.boardService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBoardDto: IBoard) {
    return await this.boardService.updateBoard(id, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.boardService.deleteBoard(id);
  }
}
