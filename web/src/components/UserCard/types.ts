import { IUser } from "../../types"

export type IUserCardProps = {
  deleteUser: (cpf: string) => void
  updateUser: (user: IUser) => void
  user: IUser
}