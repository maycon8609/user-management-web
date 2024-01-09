import { FC } from "react"
import { StyledCardInput } from "./styles"
import type { ICardInput } from "./types"

export const CardInput: FC<ICardInput> = (props) => (
  <StyledCardInput {...props} />
)
