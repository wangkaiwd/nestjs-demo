import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './constants/config';
import { generateSwaggerDocument } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generateSwaggerDocument(app);
  await app.listen(PORT);
}

bootstrap();
