import styled from "@emotion/styled";
import Link from "next/link";

import { transientOptions } from "@/styles";

import {
  BUTTON_BORDER_RADIUS,
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from "./Button.config";
import { IStyledButtonProps } from "./Button.types";

/**
 * Dummy buton component to wrap below as I don't way to pass
 * extra options ,i.e transientOptions in this case for native styled
 * components.
 */
const StyledButton_ = styled.button``;

export const StyledButton = styled.button<IStyledButtonProps>`
  --color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => {
    return BUTTON_VARAINT_CONFIG[$colorVariant][$variant].color;
  }};
  --border-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].borderColor};
  --bg-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].bgColor};

  border-radius: ${({ $borderRadius = DEFAULT_BORDER_RADIUS }) =>
    `var(${BUTTON_BORDER_RADIUS[$borderRadius].cssVariable})`};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  outline: none;

  color: var(--color);
  background-color: var(--bg-color);
  min-width: fit-content;
  cursor: pointer;
  text-decoration: none;
  transition: width, filter, 240ms ease-in-out;

  &:disabled {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link, transientOptions)``;
