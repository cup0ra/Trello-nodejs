import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JWT_SECRET_KEY } from 'src/common/conctans-evn';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ILoginDto } from 'src/common/types';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  async login(loginDto: ILoginDto): Promise<string> {
    const { login, password } = loginDto;

    const user = await this.repo.findOne({ login });

    if (!user) throw new HttpException(`User '${login}' not found`, HttpStatus.NOT_FOUND);

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching)
      throw new HttpException('Passwords do not match.', HttpStatus.BAD_GATEWAY);

    const token = jwt.sign({ id: user.id, login }, JWT_SECRET_KEY);
    return token;
  }
}
