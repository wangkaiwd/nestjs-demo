import { Controller, Post } from '@nestjs/common';
import AuthService from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    return 'register';
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}

export default AuthController;
