import { applyDecorators, SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const PUBLIC_KEY = 'public';
const PublicAuthMiddleware = SetMetadata(IS_PUBLIC_KEY, true);
const PublicAuthSwagger = SetMetadata('swagger/apiSecurity', [PUBLIC_KEY]);
export const Public = () =>
  applyDecorators(PublicAuthMiddleware, PublicAuthSwagger);
