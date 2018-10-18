import { ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException, Res } from '@nestjs/common';
import * as path from 'path';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // send file does not work for some reasons-_-
    response.redirect('/');

  }
}
