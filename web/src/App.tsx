import { FC, useCallback, useEffect, useState } from "react"

import { CreateUserCard } from "@components/CreateUserCard"
import { UserCard } from "@components/UserCard"

import { createUserService } from "@services/createUser"
import { deleteUserService } from "@services/deleteUser"
import { getAllUsersService } from "@services/getAllUsers"
import { updateUserService } from '@services/updateUser'

import { StyledAppContainer } from "./styles"

import type { IUpdateUser, IUser } from "./types"

export const App: FC = () => {
  const [userData, setUserData] = useState<IUser[]>([])

  const updateUser: IUpdateUser = useCallback(
    async (newUserData) => {
      if (newUserData.cpf && newUserData.name) {
        const { data } = await updateUserService<IUser>(newUserData)
  
        const filteredUserData = userData.filter(
          (user) => user.cpf !== newUserData.cpf
        )
  
        setUserData([...filteredUserData, data])
      }
    },
    [userData]
  )

  const fetchData = useCallback(async (): Promise<void> => {
    const { data } = await getAllUsersService<IUser[]>()

    setUserData(data)
  }, [])

  async function handleCreateUser(user: { cpf: string, name: string }) {
    if (user.cpf && user.name) {
      const { data } = await createUserService<IUser>(user)
  
      setUserData([...userData, data])
    }
  }

  async function handleDeleteUser(cpf: string) {
    await deleteUserService(cpf)
    await fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <StyledAppContainer>
      <CreateUserCard handleConfirm={(user) => handleCreateUser(user)} />
      {userData.map((user) => {
        return (
          <UserCard
            key={user.cpf}
            deleteUser={handleDeleteUser}
            user={user}
            updateUser={updateUser}
          />
        )
      })}
    </StyledAppContainer>
  )
}
