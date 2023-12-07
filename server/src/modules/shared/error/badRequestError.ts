import { ApiError } from '@shared/error/apiError'
import { exceptionType } from '@shared/enum/exceptionType'
import { statusCode } from '@shared/enum/statusCode'

export class BadRequestError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.BAD_REQUEST_EXCEPTION
    super(message, statusCode.BAD_REQUEST, errorType)
  }
}
