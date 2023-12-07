import { User } from '@users/domain/User'

export interface IUserRepository {
  delete(cpf: string): void
  findAll(): Promise<User[] | []>
  findByCpf(cpf: string): Promise<User | undefined>
  create(user: User): Promise<User>
  update(user: User): Promise<User>
}
