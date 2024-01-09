import { FC } from "react"
import { StyledCardContentContainer } from "./styles"
import type { ICardContentContainer } from "./types"

export const CardContentContainer: FC<ICardContentContainer> = (props) => (
  <StyledCardContentContainer {...props} />
)
