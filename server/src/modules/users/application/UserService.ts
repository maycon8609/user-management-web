import { ConflictError } from "@shared/error/conflictError"
import { exceptionType } from "@shared/enum/exceptionType"
import { NotFoundError } from "@shared/error/notFoundError"
import { User } from "@users/domain/User"
import type { IUser, IUserRepository } from "@users/domain/types"
import type { IUserService } from "./types"

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) { }

  async createUser(user: User): Promise<IUser> {
    const existentUser = await this.userRepository.findByCpf(user.cpf)

    if (existentUser) {
      throw new ConflictError(
        'This cpf is already in use. Please check your details.',
        exceptionType.EXISTS_CPF_EXCEPTION
      )
    }

    const createUser = await this.userRepository.create(user)
    return createUser
  }

  async findUserByCpf(cpf: string): Promise<IUser> {
    const existentUser = await this.userRepository.findByCpf(cpf)

    if (!existentUser) {
      throw new NotFoundError(
        'The cpf entered does not exist in the database, check your data and try again.',
        exceptionType.NOT_FOUND_CPF_EXCEPTION
      )
    }

    return existentUser
  }

  async getAllUsers(): Promise<User[] | []> {
    const listOfUser = await this.userRepository.getAll()
    return listOfUser
  }

  async updateUser(user: User): Promise<IUser> {
    const existentUser = await this.userRepository.findByCpf(user.cpf)

    if (!existentUser) {
      throw new NotFoundError(
        'The cpf entered does not exist in the database, check your data and try again.',
        exceptionType.NOT_FOUND_CPF_EXCEPTION
      )
    }

    const updatedUser = await this.userRepository.update(user)
    return updatedUser
  }

  async deleteUser(cpf: string): Promise<void> {
    const existentUser = await this.userRepository.findByCpf(cpf)

    if (!existentUser) {
      throw new NotFoundError(
        'The cpf entered does not exist in the database, check your data and try again.',
        exceptionType.NOT_FOUND_CPF_EXCEPTION
      )
    }

    await this.userRepository.delete(cpf)
  }
}
