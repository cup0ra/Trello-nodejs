import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserReturn } from '../../common/types';
import { User } from '../../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}
  public getAll = async (): Promise<User[]> => this.repo.find();

  public getById = async (id: string): Promise<User | undefined> => {
    const user = this.repo.findOne(id);
    if (!user) throw new HttpException(`User '${id}' not found`, HttpStatus.NOT_FOUND);
    return user;
  };

  public addUser = async (user: User): Promise<UserReturn> => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await this.repo.save({ ...user, password: hashedPassword });
    if (!user) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    return User.toResponse(result);
  };

  public updateUser = async (user: User): Promise<UserReturn> => {
    await this.repo.update(user.id, user);
    const userFind = await this.repo.findOne(user.id);
    if (!userFind) throw new HttpException(`User '${user.id}' not found`, HttpStatus.NOT_FOUND);
    return User.toResponse(userFind);
  };

  public deleteUser = async (id: string): Promise<void> => {
    const deleteResponse = await this.repo.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException(`User '${id}' not found`, HttpStatus.BAD_REQUEST);
    }
  };
}
