export interface IUser {
  id?: string
  cpf: string
  name: string
  created_at?: Date
  updated_at?: Date
}

export interface IUserRepository {
  delete(cpf: string): Promise<void>
  findAll(): Promise<IUser[] | []>
  findByCpf(cpf: string): Promise<IUser | null>
  create(user: IUser): Promise<IUser>
  update(user: IUser): Promise<IUser>
}
