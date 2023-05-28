import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import AuthService from '../services/auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from '../dtos/auth.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
@ApiTags('Auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: RegisterDto) {
    return this.authService.login(loginDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  profile(@Req() req) {
    return this.authService.profile(req.user.id);
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}

export default AuthController;
