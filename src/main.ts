import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { PORT } from './constants/config';
import { generateSwaggerDocument } from './helper/swagger';
import { ValidationPipe } from '@nestjs/common';
import RemoveSensitiveInfoInterceptor from './modules/shared/interceptors/remove-sensitive-info.interceptor';
import HttpExceptionFilter from './modules/shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new RemoveSensitiveInfoInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  generateSwaggerDocument(app);
  await app.listen(PORT);
}

bootstrap();
