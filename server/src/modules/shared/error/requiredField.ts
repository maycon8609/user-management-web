import { ApiError } from '@shared/error/apiError'
import { exceptionType } from '@shared/enum/exceptionType'
import { statusCode } from '@shared/enum/statusCode'

export class RequiredField extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.UNPROCESSABLE_CONTENT
    super(message, statusCode.UNPROCESSABLE_CONTENT, errorType)
  }
}
