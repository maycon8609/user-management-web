import { NextFunction, Request, Response } from "express"

import { ApiError } from "../error/apiError"
import { statusCode as statusCodeEnum } from '../enum/statusCode'
import { exceptionType } from "../enum/exceptionType";

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
