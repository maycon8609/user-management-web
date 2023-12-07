import { NextFunction, Request, Response } from "express"

import { ApiError } from "@shared/error/apiError"
import { statusCode as statusCodeEnum } from '@shared/enum/statusCode'
import { exceptionType } from "@shared/enum/exceptionType"

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response => {
  const isCustomError = error.statusCode
  const statusCode = isCustomError ? error.statusCode : statusCodeEnum.INTERNAL_SERVER_ERROR
  const type = isCustomError ? error.type : exceptionType.INTERNAL_SERVER_EXCEPTION
  const message = isCustomError ? error.message : "Internal Server Error"
  return response.status(statusCode).json({ type, message })
};
