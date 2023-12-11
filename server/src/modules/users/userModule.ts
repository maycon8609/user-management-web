import { UserRepository } from '@users/infra/UserRepository'
import { UserService } from '@users/application/UserService'
import { UserController } from '@users/application/UserController'
import { UserRouter } from '@users/routes'

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)
const useRouter = new UserRouter(userController)

export { useRouter }
