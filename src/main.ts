import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { PORT } from './constants/config';
import { generateSwaggerDocument } from './helper/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  generateSwaggerDocument(app);
  await app.listen(PORT);
}

bootstrap();
