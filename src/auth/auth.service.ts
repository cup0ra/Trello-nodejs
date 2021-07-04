import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ILoginDto, JwtPayload } from 'src/common/types';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: ILoginDto): Promise<{ token: string }> {
    const { login, password } = loginDto;

    const user = await this.repo.findOne({ login });
    if (!user) throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching)
      throw new HttpException('Passwords do not match.', HttpStatus.BAD_GATEWAY);
    const token = this.jwtService.sign({ id: user.id, login });
    return { token };
  }
  async validateUser(payload: JwtPayload): Promise<JwtPayload> {
    const user = await this.repo.findOne({ login: payload.login });
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return payload;
  }
}
