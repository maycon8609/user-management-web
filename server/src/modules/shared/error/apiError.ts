import { exceptionType } from '../enum/exceptionType'
import { statusCode } from '../enum/statusCode'

export class ApiError extends Error {
  public readonly statusCode: number
  public readonly type: string

  constructor(message: string, statusCode: number, type: string) {
    super(message)
    this.statusCode = statusCode
    this.type = type
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.BAD_REQUEST_EXCEPTION
    super(message, statusCode.BAD_REQUEST, errorType)
  }
}

export class ConflictError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.CONFLICT_EXCEPTION
    super(message, statusCode.CONFLICT, errorType)
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string, type?: string) {
    const errorType = type ?? exceptionType.NOT_FOUND_EXCEPTION
    super(message, statusCode.NOT_FOND, errorType)
  }
}