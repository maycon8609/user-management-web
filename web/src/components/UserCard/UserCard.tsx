import { FC, useMemo, useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

import { Card } from "../Card"
import { IUserCardProps } from "./types"
import type { IUser } from "../../types"

export const UserCard: FC<IUserCardProps> = ({
  deleteUser,
  updateUser,
  user
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [userState, setUserState] = useState<IUser>(user)

  const contentContainerContent = useMemo(() => {
    return (
      <>
        {isEditing ? (
          <Card.Input
            value={userState.name}
            onChange={(event) =>
              setUserState({ ...userState, name: event.target.value })
            }
          />
        ) : (
          <Card.Title title={userState.name}>{userState.name}</Card.Title>
        )}

        <Card.SubTitle>{userState.cpf}</Card.SubTitle>
      </>
    )
  }, [isEditing, userState])

  const iconsContainerContent = useMemo(() => {
    if (isEditing) {
      return (
        <>
          <Card.IconButton
            onClick={() => {
              setIsEditing(false)
              updateUser(userState)
            }}
          >
            <CheckIcon style={{ color: "#fff" }} />
          </Card.IconButton>
          <Card.IconButton
            onClick={() => {
              setIsEditing(false)
            }}
          >
            <CloseIcon style={{ color: "#fff" }} />
          </Card.IconButton>
        </>
      )
    }

    return (
      <>
        <Card.IconButton onClick={() => setIsEditing(true)}>
          <EditIcon style={{ color: "#fff" }} />
        </Card.IconButton>
        <Card.IconButton onClick={() => deleteUser(userState.cpf)}>
          <DeleteIcon style={{ color: "#fff" }} />
        </Card.IconButton>
      </>
    )
  }, [deleteUser, isEditing, updateUser, userState])

  return (
    <Card.Root>
      <Card.Image src="https://picsum.photos/200" />

      <Card.ContentContainer>{contentContainerContent}</Card.ContentContainer>

      <Card.IconsContainer>{iconsContainerContent}</Card.IconsContainer>
    </Card.Root>
  )
}
