import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';
import { encryptPassword, makeSalt } from '../../shared/utils/cryptogram';
import { RegisterDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import User from '../entities/user.mongo.entity';
import { RoleService } from '../../role/role.service';

@Injectable()
class AuthService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: MongoRepository<User>,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
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

  async validate(loginDto: RegisterDto) {
    const { name, password } = loginDto;
    const user = await this.userRepository.findOneBy({ name });
    if (!user) {
      throw new InternalServerErrorException('username not exist');
    }
    const { password: encryptedPassword, salt } = user;
    const currentPassword = encryptPassword(password, salt);
    if (currentPassword !== encryptedPassword) {
      throw new InternalServerErrorException('password not match');
    }
    return user;
  }

  async profile(userId: string) {
    // todo: Why find by id so weird?
    const { password, salt, name, ...rest } =
      (await this.userRepository.findOneBy({
        _id: new ObjectId(userId),
      }))!;
    let role = {};
    if (rest.roleId) {
      const { id, name, ...roleRest } = (await this.roleService.findOne(
        rest.roleId,
      ))!;
      role = {
        roleName: name,
        ...roleRest,
      };
    }
    return {
      userName: name,
      ...rest,
      ...role,
    };
  }

  async login(loginDto: RegisterDto) {
    const user = await this.validate(loginDto);
    const token = this.jwtService.sign({ id: user.id });
    await this.userRepository.update(user.id, {
      token,
    });
    return {
      token,
      id: user.id,
      name: user.name,
    };
  }

  async logout(userId: string) {
    await this.userRepository.update(userId, { token: null });
  }
}

export default AuthService;
