import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { logger } from './winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const queryStr = JSON.stringify(req.query);
    const bodyStr = JSON.stringify(req.body);
    const now = Date.now();
    const message = `METHOD:${method} | URL:${url} | QUERY:${queryStr} | BODY:${bodyStr} [${
      Date.now() - now
    }ms]`;
    return next.handle().pipe(
      tap(() => {
        logger.info(message);
      })
    );
  }
}
