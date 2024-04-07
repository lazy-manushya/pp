export type Size = "xs" | "sm" | "md" | "lg";

export interface IAvatarProps {
  img?: string;
  initials?: string;
  className?:string;
  size?: Size;
}
