export type IUser = {
  cpf: string
  created_at: string
  id: string
  name: string
  updated_at: string
}

export type IUpdateUser = (newUserData: IUser) => void