import { HttpException, Injectable } from '@nestjs/common';
import RegisterDto from '../dtos/auth.dto';
import UserRepository from '../user.repository';

@Injectable()
class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(registerDto: RegisterDto) {
    if (await this.isUserRepeat(registerDto.name)) {
      new HttpException('username is repeat', 400);
      return;
    }
    await this.userRepository.save(registerDto);
  }

  async isUserRepeat(name: string) {
    return await this.userRepository.findOne({ where: { name } });
  }
}

export default AuthService;
