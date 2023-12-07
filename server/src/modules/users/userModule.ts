import { UserRepositoryInMemory } from '@users/infra/UserRepositoryInMemory'
import { UserService } from '@users/application/UserService'
import { UserController } from '@users/application/UserController'
import { UserRouter } from '@users/routes'

const userRepository = new UserRepositoryInMemory()
const userService = new UserService(userRepository)
const userController = new UserController(userService)
const useRouter = new UserRouter(userController)

export { useRouter }
