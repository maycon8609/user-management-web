import { FC } from "react"
import { StyledCardIconsContainer } from "./styles"
import type { ICardIconsContainer } from "./types"

export const CardIconsContainer: FC<ICardIconsContainer> = (props) => (
  <StyledCardIconsContainer {...props} />
)
