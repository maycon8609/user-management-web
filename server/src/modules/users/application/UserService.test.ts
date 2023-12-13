import { UserRepositoryInMemory } from '@users/infra/UserRepositoryInMemory'
import { UserService } from './UserService'
import { ConflictError } from '@shared/error/conflictError'
import { NotFoundError } from '@shared/error/notFoundError'

describe('[modules:users]: application -> UserService', () => {
  describe('UserService.createUser', () => {
    it('should return a ConflictError exception when the cpf entered is already registered', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const userData = { cpf: '03372977033', name: 'John Doe' }
      await userService.createUser(userData)

      await expect(() => userService.createUser(userData)).rejects.toBeInstanceOf(ConflictError)
    })

    it('should create a new user when it does not yet exist', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const userData = { cpf: '03372977033', name: 'John Doe' }
      const user = await userService.createUser(userData)

      expect(user).toEqual(userData)
    })
  })

  describe('UserService.findUserByCpf', () => {
    it('should return a NotFoundError exception when the cpf entered is not registered', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userCpf = '03372977033'

      await expect(() => userService.findUserByCpf(userCpf)).rejects.toBeInstanceOf(NotFoundError)
    })

    it('should return a user when it exists', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const userData = { cpf: '03372977033', name: 'John Doe' }
      await userService.createUser(userData)
      let users = await userService.findUserByCpf(userData.cpf)

      expect(users).toEqual(userData)
    })
  })

  describe('UserService.getAllUsers', () => {
    it('should return an empty list when there are no registered users', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      let users = await userService.getAllUsers()

      expect(users).toEqual([])
    })

    it('should return an array with users when there are registered users', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const userData = { cpf: '03372977033', name: 'John Doe' }
      await userService.createUser(userData)
      let users = await userService.getAllUsers()

      expect(users).toEqual([userData])
    })
  })

  describe('UserService.updateUser', () => {
    it('should return a NotFoundError exception when the user does not exist', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userData = { cpf: '03372977033', name: 'John Doe' }

      await expect(() => userService.updateUser(userData)).rejects.toBeInstanceOf(NotFoundError)
    })

    it('should return user data when it is updated', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const createUserData = { cpf: '03372977033', name: 'John Doe' }
      await userService.createUser(createUserData)

      const updatedUserData = { cpf: '03372977033', name: 'Carl Johnson' }
      let updatedUser = await userService.updateUser(updatedUserData)

      expect(updatedUser).toEqual(updatedUserData)
    })
  })

  describe('UserService.deleteUser', () => {
    it('should return a NotFoundError exception when the cpf entered is not registered', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userCpf = '03372977033'

      await expect(() => userService.deleteUser(userCpf)).rejects.toBeInstanceOf(NotFoundError)
    })

    it('should delete a user when it exists', async () => {
      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)

      const userData = { cpf: '03372977033', name: 'John Doe' }
      await userService.createUser(userData)
      let users = await userService.getAllUsers()

      expect(users).toEqual([userData])

      await userService.deleteUser(userData.cpf)
      users = await userService.getAllUsers()

      expect(users).toEqual([])
    })
  })
})
