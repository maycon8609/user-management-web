import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes
} from "react"

export type ICardRootProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type ICardContentContainer = ICardRootProps

export type ICardIconsContainer = ICardRootProps

export type ICardImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export type ICardTitle = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export type ICardSubTitle = ICardTitle

export type ICardIconButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ICardInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>, 
  HTMLInputElement
>
