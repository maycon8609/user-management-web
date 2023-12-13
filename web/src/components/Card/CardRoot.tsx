import { FC } from "react"
import { StyledCardContainer } from "./styles"
import type { ICardRootProps } from "./types"

export const CardRoot: FC<ICardRootProps> = (props) => (
  <StyledCardContainer {...props} />
)
