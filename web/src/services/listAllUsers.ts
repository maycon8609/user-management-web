import { Api } from '../api'

export function listAllUsers<T>() {
  return Api.get<T>('/user')
}