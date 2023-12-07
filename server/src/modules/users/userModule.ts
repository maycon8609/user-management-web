import { UserRepositoryInMemory } from './infra/UserRepositoryInMemory'
import { UserService } from './application/UserService'
import { UserController } from './application/UserController'
import { UserRouter } from './routes'

const userRepository = new UserRepositoryInMemory()
const userService = new UserService(userRepository)
const userController = new UserController(userService)
const useRouter = new UserRouter(userController)

export { useRouter }
