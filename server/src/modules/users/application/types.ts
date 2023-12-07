import { User } from "@users/domain/User"

export interface IUserService {
  createUser(user: User): Promise<User>
  deleteUser(cpf: string): Promise<void>
  findAllUser(): Promise<User[] | []>
  findUserByCpf(cpf: string): Promise<User>
  updateUser(user: User): Promise<User>
}
