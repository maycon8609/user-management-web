import { Router } from 'express'

import { UserController } from '@users/application/UserController'

export class UserRouter {
  public readonly router: Router

  constructor(private readonly userController: UserController) {
    this.router = Router()
    this.router.post('/user', this.userController.createUser.bind(this.userController))
    this.router.get('/user/:cpf', this.userController.findUserByCpf.bind(this.userController))
    this.router.get('/user', this.userController.getAllUsers.bind(this.userController))
    this.router.put('/user/:cpf', this.userController.updateUser.bind(this.userController))
    this.router.delete('/user/:cpf', this.userController.deleteUser.bind(this.userController))
  }
}
