/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Register } from 'src/typeorm';
import { loginDto } from 'src/typeorm/loginDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  signup(@Body() register: Register) {
    return this.authService.signup(register);
  }

  @Post('login')
  async login(@Body() loginDto: loginDto) {
    const result = await this.authService.login(loginDto);
    console.log(result);
    return result;
  }
}
