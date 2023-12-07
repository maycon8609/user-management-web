import { ApiError } from './apiError'
import { exceptionType } from '../enum/exceptionType'
import { statusCode } from '../enum/statusCode'

export class ConflictError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.CONFLICT_EXCEPTION
    super(message, statusCode.CONFLICT, errorType)
  }
}
