import { FC } from "react"
import { StyledCardIconButton } from "./styles"
import type { ICardIconButton } from "./types"

export const CardIconButton: FC<ICardIconButton> = (props) => (
  <StyledCardIconButton {...props} />
)
