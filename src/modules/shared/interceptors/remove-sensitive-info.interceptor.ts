import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

const sensitiveFields = ['isDelete'];

class RemoveSensitiveInfoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const [, res] = context.getArgs();
    const code = res.statusCode;
    return next.handle().pipe(
      map((res) => {
        this.removeSensitiveFields(res);
        return {
          code,
          data: res || null,
          msg: 'success',
        };
      }),
    );
  }

  removeSensitiveFields(data: Record<string, any> | null | undefined) {
    if (!data || typeof data !== 'object') {
      return;
    }
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this.removeSensitiveFields(item);
      });
    } else {
      Object.keys(data).forEach((key) => {
        if (sensitiveFields.includes(key)) {
          delete data[key];
          return;
        }
        const value = data[key];
        this.removeSensitiveFields(value);
      });
    }
  }
}

export default RemoveSensitiveInfoInterceptor;
