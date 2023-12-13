import { FC } from "react"
import { StyledCardTitle } from "./styles"
import type { ICardTitle } from "./types"

export const CardTitle: FC<ICardTitle> = (props) => (
  <StyledCardTitle {...props} />
)
