import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  getEnv() {
    return {
      version: '1.0.0',
      platform: 'macos',
    };
  }
}
