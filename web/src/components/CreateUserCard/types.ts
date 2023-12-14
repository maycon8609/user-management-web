import { IUser } from "../../types";

export type ICreateUserData = Pick<IUser, 'cpf' | 'name'>

export type ICreateUserCardProps = {
  handleCancel?: () => void
  handleConfirm: (user: ICreateUserData) => void
}