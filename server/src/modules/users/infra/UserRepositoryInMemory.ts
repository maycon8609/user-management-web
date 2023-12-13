import type { IUser, IUserRepository } from '@users/domain/types'

export class UserRepositoryInMemory implements IUserRepository {
  private users: IUser[] = []

  async create(user: IUser): Promise<IUser> {
    this.users.push(user)
    return user
  }

  async findByCpf(cpf: string): Promise<IUser | null> {
    const user = this.users.find(user => user.cpf === cpf)
    return user ?? null
  }

  async getAll(): Promise<IUser[] | []> {
    return this.users
  }

  async update(user: IUser): Promise<IUser> {
    const filteredUsers = this.users.filter(mappedUser => mappedUser.cpf !== user.cpf)
    const updatedUsers = [
      ...filteredUsers,
      user
    ]
    this.users = updatedUsers
    return user
  }

  async delete(cpf: string): Promise<void> {
    const filteredUsers = this.users.filter(user => user.cpf !== cpf)
    this.users = filteredUsers
  }
}
