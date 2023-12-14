import { IUser } from "./types"

export class User implements IUser {
  cpf: string
  name: string
  created_at?: Date | undefined
  updated_at?: Date | undefined

  constructor({ cpf, name, created_at, updated_at }: IUser) {
    this.cpf = cpf
    this.name = name
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
