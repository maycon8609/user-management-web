import { User } from "../domain/User"
import { IUserRepository } from "../domain/UserRepository"
import { ConflictError, NotFoundError } from "../error/apiError"
import { exceptionType } from "../enum/exceptionType"

export class UserService {
  constructor(private readonly userRepository: IUserRepository) { }

  async createUser(user: User): Promise<User> {
    const existentUser = await this.userRepository.findByCpf(user.cpf)

    if (!existentUser) {
      throw new ConflictError(
        'This cpf is already in use. Please check your details.',
        exceptionType.EXISTS_CPF_EXCEPTION
      )
    }

    const createUser = await this.userRepository.create(user)
    return createUser
  }

  async deleteUser(cpf: string): Promise<void> {
    const existentUser = await this.userRepository.findByCpf(cpf)

    if (!existentUser) {
      throw new NotFoundError(
        'The cpf entered does not exist in the database, check your data and try again.',
        exceptionType.NOT_FOUND_CPF_EXCEPTION
      )
    }

    this.userRepository.delete(cpf)
  }

  async findAllUser(): Promise<User[] | []> {
    const listOfUser = await this.userRepository.findAll()
    return listOfUser
  }

  async findUserByCpf(cpf: string): Promise<User> {
    const existentUser = await this.userRepository.findByCpf(cpf)

    if (!existentUser) {
      throw new NotFoundError(
        'The cpf entered does not exist in the database, check your data and try again.',
        exceptionType.NOT_FOUND_CPF_EXCEPTION
      )
    }

    return existentUser
  }

  async updateUser(user: User): Promise<User> {
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
}
