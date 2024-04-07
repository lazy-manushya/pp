import { ElementType } from "react";

export type DisplaySize = "md" | "lg" | "xl" | "xxl";

export type HeadingSize = "sm" | "md" | "lg" | "overline";

export type LabelSize = "sm" | "md" | "lg";

export type BodySize = "sm" | "md" | "lg";

// ----------------------

export interface ICommonTypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType<any, keyof JSX.IntrinsicElements>;
  style?: React.CSSProperties;
}

export interface IDisplayProps extends ICommonTypographyProps {
  size: DisplaySize;
}

export interface IHeadingProps extends ICommonTypographyProps {
  size: HeadingSize;
}

export interface ILabelProps extends ICommonTypographyProps {
  size: LabelSize;
}

export interface IBodyProps extends ICommonTypographyProps {
  size: BodySize;
}
