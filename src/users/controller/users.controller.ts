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
import { User } from '../../entity/user.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async create(@Body() createUserDto: User) {
    return await this.userService.addUser(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: User) {
    return await this.userService.updateUser({ ...updateUserDto, id });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
