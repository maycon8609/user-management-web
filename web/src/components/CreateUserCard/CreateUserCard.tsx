import { FC, useState } from "react"
import { Card } from "../Card"
import {
  StyledCreateUserCardButton,
  StyledCreateUserCardButtonContainer,
} from "./styles"
import type { ICreateUserCardProps, ICreateUserData } from "./types"

export const CreateUserCard: FC<ICreateUserCardProps> = ({
  handleCancel,
  handleConfirm
}) => {
  const [user, setUser] = useState<ICreateUserData>({
    cpf: "",
    name: ""
  })

  function handleCancelChange() {
    if (handleCancel) handleCancel()

    setUser({
      cpf: "",
      name: ""
    })
  }

  function handleConfirmChange() {
    handleConfirm(user)

    setUser({
      cpf: "",
      name: ""
    })
  }

  return (
    <Card.Root style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Card.SubTitle>Nome: </Card.SubTitle>
      <Card.Input
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
        style={{ maxWidth: "100%" }}
      />

      <Card.SubTitle>Cpf: </Card.SubTitle>
      <Card.Input
        value={user.cpf}
        onChange={(event) => setUser({ ...user, cpf: event.target.value })}
        style={{ maxWidth: "100%" }}
      />

      <StyledCreateUserCardButtonContainer>
        <StyledCreateUserCardButton
          onClick={handleCancelChange}
          style={{ backgroundColor: "#d63031" }}
        >
          Cancelar
        </StyledCreateUserCardButton>

        <StyledCreateUserCardButton
          onClick={handleConfirmChange}
          style={{ backgroundColor: "#00b894" }}
        >
          Confirmar
        </StyledCreateUserCardButton>
      </StyledCreateUserCardButtonContainer>
    </Card.Root>
  )
}
