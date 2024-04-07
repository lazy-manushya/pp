import { Size } from "./Avatar.types";

export const ICON_SIZE_CONFIG: Record<
  Size,
  {
    size: string;
  }
> = {
  xs: {
    size: "1rem",
  },
  sm: {
    size: "1.25rem",
  },
  md: {
    size: "2rem",
  },
  lg: {
    size: "3rem",
  },
};

export const DEFAULT_SIZE: Size = "md";
