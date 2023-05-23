import CreateUserDto from '../dtos/create-user.dto';

class AuthService {
  register(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}

export default AuthService;
