import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // handle incoming requests and returning response to the client
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
