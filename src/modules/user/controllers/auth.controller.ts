import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import AuthService from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { RegisterDto } from '../dtos/auth.dto';
import { Public } from '../decorators/public';
import { RequestWithUser } from '../../shared/types';

@Controller('auth')
@ApiTags('Auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Public()
  @Post('login')
  login(@Body() loginDto: RegisterDto) {
    return this.authService.login(loginDto);
  }

  @Get('/profile')
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user.id);
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}

export default AuthController;
