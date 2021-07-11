import { Body, Controller, Post } from '@nestjs/common';
import { ILoginDto } from 'src/common/types';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  public async login(@Body() loginUserDto: ILoginDto): Promise<{ token: string }> {
    return await this.authService.login(loginUserDto);
  }
}
