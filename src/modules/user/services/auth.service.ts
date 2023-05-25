import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import RegisterDto from '../dtos/auth.dto';
import UserRepository from '../user.repository';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';

@Injectable()
class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}

  async register(registerDto: RegisterDto) {
    if (await this.isUserRepeat(registerDto.name)) {
      throw new HttpException('Username is repeat', HttpStatus.CONFLICT);
    }
    await this.userRepository.save(registerDto);
  }

  async isUserRepeat(name: string) {
    return await this.userRepository.findOne({ where: { name } });
  }
}

export default AuthService;
