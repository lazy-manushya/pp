"use client";

import styled from "@emotion/styled";

import { squareSizing } from "@/utils/css";

import { Size } from "./Icon.types";
import { ICON_SIZE_CONFIG } from "./Icon.config";

export const StyledIcon = styled.img<{ $size: Size; $customSize: string }>`
  ${({ $size, $customSize }) =>
    squareSizing($customSize || ICON_SIZE_CONFIG[$size].size)}
`;
