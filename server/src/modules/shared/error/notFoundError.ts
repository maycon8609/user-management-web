import { ApiError } from '@shared/error/apiError'
import { exceptionType } from '@shared/enum/exceptionType'
import { statusCode } from '@shared/enum/statusCode'

export class NotFoundError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.NOT_FOUND_EXCEPTION
    super(message, statusCode.NOT_FOND, errorType)
  }
}
