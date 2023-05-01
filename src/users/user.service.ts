import { Injectable } from '@nestjs/common';
import { SystemService } from '../shared/system.service';

@Injectable()
export class UserService {
  constructor(private readonly systemService: SystemService) {}

  create() {
    console.log(this.systemService.getEnv());
    return 'hh';
  }
}
