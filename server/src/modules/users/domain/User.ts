import { IUser } from "./types"

export class User implements IUser {
  id?: string | undefined
  cpf: string
  name: string
  created_at?: Date | undefined
  updated_at?: Date | undefined

  constructor({ id, cpf, name, created_at, updated_at }: IUser) {
    this.id = id
    this.cpf = cpf
    this.name = name
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
