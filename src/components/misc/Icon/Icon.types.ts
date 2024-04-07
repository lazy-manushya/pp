export type Size = "xxs" | "xs" | "sm" | "md" | "lg";

export type Color = "black";

export interface IIconProps {
  src: string;
  alt?: string;
  size?: Size;
  customSize?: string;
  className?: string;
  colorVariant?: Color;
  isSrcRelative?: boolean;
}
