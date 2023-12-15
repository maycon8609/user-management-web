import { Api } from "@api"

export function deleteUserService(cpf: string) {
  return Api.delete(`/user/${cpf}`)
}