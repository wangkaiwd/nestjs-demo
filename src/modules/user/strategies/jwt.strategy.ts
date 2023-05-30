import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';
import { MongoRepository } from 'typeorm';
import User from '../entities/user.mongo.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: MongoRepository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string }) {
    const user = await this.userRepository.findOneBy({
      _id: new ObjectId(payload.id),
    });
    if (!user?.token) {
      throw new UnauthorizedException();
    }
    return {
      id: payload.id,
    };
  }
}
