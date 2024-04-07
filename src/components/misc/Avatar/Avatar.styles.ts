"use client";

import styled from "@emotion/styled";

import { squareSizing } from "@/utils/css";

import { Size } from "./Avatar.types";
import { ICON_SIZE_CONFIG } from "./Avatar.config";

export const StyledAvatar = styled.div<{ $useImage: boolean; $size: Size }>`
  ${({ $size }) => squareSizing(ICON_SIZE_CONFIG[$size].size)}

  border-radius: var(--border-radius-round, 20rem);

  ${({ $useImage }) =>
    $useImage
      ? `
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `
      : `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    background: #F9A80A;
   `}
`;
