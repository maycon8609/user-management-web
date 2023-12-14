import { IUser } from "../../types";

export type IUserCardProps = {
  deleteUser: () => void
  updateUser: (user: IUser) => void
  user: IUser
}