export interface IUser {
  cpf: string
  name: string
  created_at?: Date
  updated_at?: Date
}

export interface IUserRepository {
  create(user: IUser): Promise<IUser>
  findByCpf(cpf: string): Promise<IUser | null>
  getAll(): Promise<IUser[] | []>
  update(user: IUser): Promise<IUser>
  delete(cpf: string): Promise<void>
}
