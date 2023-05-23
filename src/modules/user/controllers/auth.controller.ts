import { Body, Controller, Post } from '@nestjs/common';
import AuthService from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import CreateUserDto from '../dtos/create-user.dto';

@Controller('auth')
@ApiTags('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
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
