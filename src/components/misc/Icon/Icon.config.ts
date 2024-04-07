import { Color, Size } from "./Icon.types";

export const ICON_SIZE_CONFIG: Record<
  Size,
  {
    size: string;
  }
> = {
  xxs: {
    size: "0.9rem",
  },
  xs: {
    size: "1rem",
  },
  sm: {
    size: "1.25rem",
  },
  md: {
    size: "1.5rem",
  },
  lg: {
    size: "2rem",
  },
};

export const DEFAULT_SIZE: Size = "md";

export const COLOR_CONFIG: Record<
  Color,
  {
    style: React.CSSProperties;
  }
> = {
  black: {
    style: {
      filter:
        "brightness(0) invert(0) invert(9%) sepia(62%) saturate(3%) hue-rotate(314deg) brightness(93%) contrast(90%)",
    },
  },
};
