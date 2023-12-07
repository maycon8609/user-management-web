import { ApiError } from './apiError'
import { exceptionType } from '../enum/exceptionType'
import { statusCode } from '../enum/statusCode'

export class BadRequestError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.BAD_REQUEST_EXCEPTION
    super(message, statusCode.BAD_REQUEST, errorType)
  }
}
