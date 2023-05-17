import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import DatabaseProvider from './database.provider';
import LoggerModule from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  exports: [SystemService, ...DatabaseProvider, LoggerModule],
  providers: [SystemService, ...DatabaseProvider],
})
export class SharedModule {}
