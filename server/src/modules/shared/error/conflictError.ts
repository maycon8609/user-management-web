import { ApiError } from '@shared/error/apiError'
import { exceptionType } from '@shared/enum/exceptionType'
import { statusCode } from '@shared/enum/statusCode'

export class ConflictError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.CONFLICT_EXCEPTION
    super(message, statusCode.CONFLICT, errorType)
  }
}
