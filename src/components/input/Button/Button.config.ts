import { BorderRadius, ButtonVariant, ColorVariant } from "./Button.types";

export const BUTTON_VARAINT_CONFIG: Record<
  ColorVariant,
  Record<ButtonVariant, { color: string; bgColor: string; borderColor: string }>
> = {
  primary: {
    primary: {
      color: "#fff",
      bgColor: "var(--clr-primary-500)",
      borderColor: "var(--clr-primary-500)",
    },
    secondary: {
      color: "var(--clr-primary-500)",
      bgColor: "transparent",
      borderColor: "var(--clr-primary-500)",
    },
    ghost: {
      color: "var(--clr-primary-500)",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },

  black: {
    primary: {
      color: "#fff",
      bgColor: "#0D0D12",
      borderColor: "#0D0D12",
    },
    secondary: {
      color: "#0D0D12",
      bgColor: "transparent",
      borderColor: "#0D0D12",
    },
    ghost: {
      color: "#0D0D12",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },

  danger: {
    primary: {
      color: "#fff",
      bgColor: "#DF1C41",
      borderColor: "#DF1C41",
    },
    secondary: {
      color: "#DF1C41",
      bgColor: "#fff",
      borderColor: "#ECEFF3",
    },
    ghost: {
      color: "#DF1C41",
      bgColor: "transparent",
      borderColor: "transparent",
    },
  },
};

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = "primary";

export const DEFAULT_COLOR_VARIANT: ColorVariant = "primary";

export const BUTTON_BORDER_RADIUS: Record<
  BorderRadius,
  { cssVariable: string }
> = {
  round: {
    cssVariable: "--border-radius-round",
  },
};

export const DEFAULT_BORDER_RADIUS: BorderRadius = "round";
