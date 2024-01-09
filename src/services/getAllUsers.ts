import { Api } from '../api'

export function getAllUsersService<T>() {
  return Api.get<T>('/user')
}