import { FC } from "react"
import { StyledCardImage } from "./styles"
import type { ICardImageProps } from "./types"

export const CardImage: FC<ICardImageProps> = (props) => (
  <StyledCardImage {...props} />
)
