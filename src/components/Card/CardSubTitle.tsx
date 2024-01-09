import { FC } from "react"
import { StyledCardSubTitle } from "./styles"
import type { ICardSubTitle } from "./types"

export const CardSubTitle: FC<ICardSubTitle> = (props) => (
  <StyledCardSubTitle {...props} />
)
