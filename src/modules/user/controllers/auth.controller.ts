import { Body, Controller, Post } from '@nestjs/common';
import AuthService from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import RegisterDto from '../dtos/auth.dto';

@Controller('auth')
@ApiTags('Auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}

export default AuthController;
