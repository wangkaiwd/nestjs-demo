import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import RegisterDto from '../dtos/auth.dto';
import UserRepository from '../user.repository';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';
import { encryptPassword, makeSalt } from '../../shared/utils/cryptogram';

@Injectable()
class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}

  async register(registerDto: RegisterDto) {
    await this.isUserRepeat(registerDto.name);
    const salt = makeSalt();
    const encryptedPassword = encryptPassword(registerDto.password, salt);
    await this.userRepository.save({
      name: registerDto.name,
      password: encryptedPassword,
      salt,
    });
  }

  async isUserRepeat(name: string) {
    const target = await this.userRepository.findOne({ where: { name } });
    if (target) {
      throw new BadRequestException('Username is repeat');
    }
  }

  async login() {
    console.log('login');
  }
}

export default AuthService;
