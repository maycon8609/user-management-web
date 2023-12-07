import { ApiError } from './apiError'
import { exceptionType } from '../enum/exceptionType'
import { statusCode } from '../enum/statusCode'

export class NotFoundError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.NOT_FOUND_EXCEPTION
    super(message, statusCode.NOT_FOND, errorType)
  }
}
