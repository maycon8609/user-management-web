import { Request, Response } from 'express'
import { UserRepositoryInMemory } from "@users/infra/UserRepositoryInMemory"
import { ConflictError } from '@shared/error/conflictError'
import { RequiredField } from '@shared/error/requiredField'
import { UserService } from "./UserService"
import { UserController } from "./UserController"


describe('[modules:users]: application -> UserController', () => {
  describe('UserController.createUser', () => {
    it('should return a RequiredField exception when not informing the cpf field', async () => {
      const request = { body: { name: 'John Doe' } } as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.createUser(request, response)).rejects.toBeInstanceOf(RequiredField)
    })

    it('should return a RequiredField exception when not informing the name field', async () => {
      const request = { body: { cpf: '03372977033' } } as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.createUser(request, response)).rejects.toBeInstanceOf(RequiredField)
    })

    it('should return a ConflictError exception when the cpf entered is invalid', async () => {
      const request = { body: { cpf: '1234567890', name: 'John Doe' } } as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.createUser(request, response)).rejects.toBeInstanceOf(ConflictError)
    })

    it('should return a user when creating the same', async () => {
      const requestBody = { cpf: '03372977033', name: 'John Doe' }
      const request = { body: requestBody } as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.createUser(request, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual(requestBody)
    })
  })

  describe('UserController.findUserByCpf', () => {
    it('should return a ConflictError exception when the cpf entered is invalid', async () => {
      const request = { params: { cpf: '1234567890' } } as any as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.findUserByCpf(request, response)).rejects.toBeInstanceOf(ConflictError)
    })

    it('should return a user when it exists', async () => {
      const requestBody = { cpf: '03372977033', name: 'John Doe' }
      const request = { body: requestBody, params: { cpf: requestBody.cpf } } as any as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.createUser(request, response)
      await userController.findUserByCpf(request, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual(requestBody)
    })
  })

  describe('UserController.getAllUsers', () => {
    it('should return an empty list when there are no registered users', async () => {
      const request = {} as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.getAllUsers(request, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual([])
    })

    it('should return a list of users when they are registered', async () => {
      const requestBody = { cpf: '03372977033', name: 'John Doe' }
      const request = { body: requestBody } as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.createUser(request, response)
      await userController.getAllUsers(request, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual([requestBody])
    })
  })

  describe('UserController.updateUser', () => {
    it('should return a RequiredField exception when not informing the name field', async () => {
      const request = { body: {}, params: { cpf: '03372977033' } } as any as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.updateUser(request, response)).rejects.toBeInstanceOf(RequiredField)
    })

    it('should return a ConflictError exception when the cpf entered is invalid', async () => {
      const request = { body: { name: 'John Doe' }, params: { cpf: '1234567890' } } as any as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.updateUser(request, response)).rejects.toBeInstanceOf(ConflictError)
    })

    it('should return a user when updating it', async () => {
      const cpf = '03372977033'
      const request = { body: { cpf, name: 'John Doe' }, params: { cpf } } as any as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.createUser(request, response)

      const updatedName = 'Carl Johnson'
      const updateRequest = { body: { name: updatedName }, params: { cpf } } as any as Request
      await userController.updateUser(updateRequest, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual({ cpf, name: updatedName })
    })
  })

  describe('UserController.deleteUser', () => {
    it('should return a ConflictError exception when the cpf entered is invalid', async () => {
      const request = { params: { cpf: '1234567890' } } as any as Request
      const response = {} as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await expect(() => userController.deleteUser(request, response)).rejects.toBeInstanceOf(ConflictError)
    })

    it('should delete a user when it exists', async () => {
      const requestBody = { cpf: '03372977033', name: 'John Doe' }
      const request = { body: requestBody, params: { cpf: requestBody.cpf } } as any as Request
      let statusCode = 0
      let jsonResult: any
      const response = {
        status: (code: number) => {
          statusCode = code
          return { json: (data: any) => { jsonResult = data } }
        }
      } as Response

      const userRepository = new UserRepositoryInMemory()
      const userService = new UserService(userRepository)
      const userController = new UserController(userService)

      await userController.createUser(request, response)
      await userController.deleteUser(request, response)

      expect(statusCode).toBe(200)
      expect(jsonResult).toEqual({ message: 'User successfully deleted.' })
    })
  })
})
