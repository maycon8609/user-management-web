export type IUserCardProps = {
  cpf: string
  deleteUser: () => void
  name: string
  updateName: (name: string) => void
}