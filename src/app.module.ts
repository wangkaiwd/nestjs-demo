import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/configuration';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
  ],
  // handle incoming requests and returning response to the client
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
