import { User } from '../domain/User'
import type { IUserRepository } from '../domain/UserRepository'

export class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = []

  async create(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  delete(cpf: string): void {
    const filteredUsers = this.users.filter(user => user.cpf !== cpf)
    this.users = filteredUsers
  }

  async findAll(): Promise<User[] | []> {
    return this.users
  }

  async findByCpf(cpf: string): Promise<User | undefined> {
    const user = this.users.find(user => user.cpf === cpf)
    return user
  }

  async update(user: User): Promise<User> {
    const filteredUsers = this.users.filter(mappedUser => mappedUser.cpf !== user.cpf)
    const updatedUsers = [
      ...filteredUsers,
      user
    ]
    this.users = updatedUsers
    return user
  }
}
