import { Body, Controller, Post } from '@nestjs/common';
import { ILoginDto } from 'src/common/types';
import { LoginService } from '../service/login.service';

@Controller('logins')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async login(@Body() loginDto: ILoginDto) {
    return await this.loginService.login(loginDto);
  }
}
