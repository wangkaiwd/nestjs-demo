import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_PATH } from '../constants/config';
import pkg from '../../package.json';
import { PUBLIC_KEY } from '../modules/user/decorators/public';

export const generateSwaggerDocument = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .setVersion(pkg.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  Object.values(document.paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes(PUBLIC_KEY)
      ) {
        method.security = [];
      }
    });
  });
  SwaggerModule.setup(SWAGGER_PATH, app, document);
};
