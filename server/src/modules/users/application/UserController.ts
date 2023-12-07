import { Request, Response } from 'express'

import { User } from "../domain/User"
import { UserService } from "./UserService"
import { ConflictError } from '../../shared/error/conflictError'
import { exceptionType } from '../../shared/enum/exceptionType'
import { isValidCpf } from '../../shared/utils/isValidCpf'
import { statusCode } from '../../shared/enum/statusCode'

export class UserController {
  constructor(private readonly userService: UserService) { }

  async createUser(request: Request, response: Response): Promise<Response> {
    const { cpf, name } = request.body

    if (!isValidCpf(cpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = new User(cpf, name)

    const createUser = await this.userService.createUser(user)
    return response.status(statusCode.OK).json(createUser)
  }

  async deleteUser(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    if (!isValidCpf(cpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    await this.userService.deleteUser(cpf)
    return response.status(statusCode.OK)
  }

  async findAllUser(_request: Request, response: Response): Promise<Response> {
    const listOfUser = await this.userService.findAllUser()
    return response.status(statusCode.OK).json(listOfUser)
  }

  async findUserByCpf(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    if (!isValidCpf(cpf)) {
      throw new ConflictError(
        'Invalid cpf. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = await this.userService.findUserByCpf(cpf)
    return response.status(statusCode.OK).json(user)
  }

  async updateUser(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params
    const { name } = request.body

    if (!isValidCpf(cpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = new User(cpf, name)
    const updatedUser = await this.userService.updateUser(user)
    return response.status(statusCode.OK).json(updatedUser)
  }

}
