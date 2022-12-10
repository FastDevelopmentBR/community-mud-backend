import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, HttpException } from '@nestjs/common';
// import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { CannotCreateEntityIdMapError, EntityNotFoundError, QueryFailedError } from 'typeorm';
// import { GlobalResponseError } from './global.response.error';

const redLog: string = '\x1b[31m'
// const greenLog: string = '\x1b[32m'
// const yellowLog: string = '\x1b[33m'
// const magentaLog: string = '\x1b[35m'
// const cyanLog: string = '\x1b[36m'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string | Object = 'Internal Error';
        let code = 'HttpException';

        // Logger.error(message, (exception as any).stack, `${request.method} ${request.url}`);

        console.error(redLog, '[Exception] ->', exception);

        switch (exception.constructor) {
            case HttpException:
                status = (exception as HttpException).getStatus();
                message = (exception as HttpException).getResponse();
                break;
            case QueryFailedError:  // this is a TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as QueryFailedError).message;
                code = (exception as any).code;
                break;
            case EntityNotFoundError:  // this is another TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as EntityNotFoundError).message;
                code = (exception as any).code;
                break;
            case CannotCreateEntityIdMapError: // and another
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as CannotCreateEntityIdMapError).message;
                code = (exception as any).code;
                break;
        }

        response
            .status(status)
            .json({
                statusCode: status,
                method: request.method,
                path: request.url,
                timestamp: new Date().toISOString(),
                message,
                code
            });
        // response.status(status).json(GlobalResponseError(status, message, code, request));
    }
}