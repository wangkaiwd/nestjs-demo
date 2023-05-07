import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import DatabaseProvider from './database.provider';

@Module({
  exports: [SystemService, ...DatabaseProvider],
  providers: [SystemService, ...DatabaseProvider],
})
export class SharedModule {}
