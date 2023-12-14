export type IUser = {
  cpf: string
  name: string
  created_at: string
  updated_at: string
}

export type IUpdateUser = (newUserData: IUser) => void