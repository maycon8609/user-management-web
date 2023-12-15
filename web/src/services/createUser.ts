import { Api } from '@api'

export function createUserService<T>(user: { cpf: string, name: string }) {
  return Api.post<T>('/user', user)
}