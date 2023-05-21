import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

class RemoveSensitiveInfoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const [, res] = context.getArgs();
    const code = res.statusCode;
    return next.handle().pipe(
      map((res) => {
        return {
          code,
          data: res,
          msg: 'success',
        };
      }),
    );
  }
}

export default RemoveSensitiveInfoInterceptor;
