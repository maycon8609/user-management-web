import { Request, Response } from 'express'

import { User } from "@users/domain/User"
import { exceptionType } from '@shared/enum/exceptionType'
import { statusCode } from '@shared/enum/statusCode'
import { BadRequestError } from '@shared/error/badRequestError'
import { ConflictError } from '@shared/error/conflictError'
import { RequiredField } from '@shared/error/requiredField'
import { isValidCpf } from '@shared/utils/isValidCpf'
import { returnNumericCharacters } from '@shared/utils/returnNumericCharacters'

import type { IUserService } from './types'

export class UserController {
  constructor(private readonly userService: IUserService) { }

  private async validateData(field: string, requiredFieldMessage?: string): Promise<void> {
    const requiredMessageException = requiredFieldMessage ?? 'Mandatory fields were not provided.'

    if (!field) {
      throw new RequiredField(requiredMessageException)
    }

    if (typeof field !== 'string') {
      throw new BadRequestError('Invalid data format.')
    }
  }

  async createUser(request: Request, response: Response): Promise<Response> {
    const { cpf, name } = request.body

    await this.validateData(cpf, 'The cpf field is mandatory and was not provided, check and try again.')
    await this.validateData(name, 'The name field is mandatory and was not provided, check and try again.')

    const normalizedCpf = returnNumericCharacters(cpf)

    if (!isValidCpf(normalizedCpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = new User({ cpf: normalizedCpf, name })

    const createUser = await this.userService.createUser(user)
    return response.status(statusCode.OK).json(createUser)
  }

  async findUserByCpf(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    const normalizedCpf = returnNumericCharacters(cpf)

    if (!isValidCpf(normalizedCpf)) {
      throw new ConflictError(
        'Invalid cpf. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = await this.userService.findUserByCpf(normalizedCpf)
    return response.status(statusCode.OK).json(user)
  }

  async getAllUsers(_request: Request, response: Response): Promise<Response> {
    const listOfUser = await this.userService.getAllUsers()
    return response.status(statusCode.OK).json(listOfUser)
  }

  async updateUser(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params
    const { name } = request.body

    await this.validateData(name, 'The name field is mandatory and was not provided, check and try again.')

    const normalizedCpf = returnNumericCharacters(cpf)

    if (!isValidCpf(normalizedCpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    const user = new User({ cpf: normalizedCpf, name })
    const updatedUser = await this.userService.updateUser(user)
    return response.status(statusCode.OK).json(updatedUser)
  }

  async deleteUser(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    const normalizedCpf = returnNumericCharacters(cpf)

    if (!isValidCpf(normalizedCpf)) {
      throw new ConflictError(
        'Invalid CPF. Please check your details.',
        exceptionType.INVALID_CPF_EXCEPTION
      )
    }

    await this.userService.deleteUser(normalizedCpf)
    return response.status(statusCode.OK).json({ message: 'User successfully deleted.' })
  }
}
