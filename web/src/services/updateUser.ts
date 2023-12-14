import { Api } from "../api"

export function updateUserService<T>({ cpf, name }: { cpf: string, name: string }) {
  return Api.put<T>(`/user/${cpf}`, { name })
}