type IUserData = {
  cpf: string;
  name: string;
};

export type IUserCardProps = {
  cpf: string
  deleteUser: () => void
  name: string
  updateName: (user: IUserData) => void
}