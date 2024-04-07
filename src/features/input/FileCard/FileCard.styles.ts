"use client";

import styled from "@emotion/styled";

import { squareSizing } from "@/utils/css";
import Button from "@/components/input/Button";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`;

export const StyledIconContainer = styled.div`
  ${squareSizing("48px")};
  padding: 1rem;
  border-radius: 1rem;
`;

export const StyledMiddleContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

export const StyledPrimaryText = styled.div`
  color: #242b42;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

export const StyledSecondaryText = styled.div`
  color: #7e8ca0;
`;

export const StyledButton = styled(Button)`
  display: flex;
  padding: 0.4rem 1.5rem;
  gap: 0.5rem;
  text-align: left;
  filter: brightness(0) invert(3%) sepia(5%) saturate(4090%) hue-rotate(201deg)
    brightness(95%) contrast(95%);

  span {
    flex: 1;
  }
`;

export const StyledDangerButton = styled(StyledButton)`
  filter: brightness(0) invert(54%) sepia(50%) saturate(3359%)
    hue-rotate(325deg) brightness(94%) contrast(95%);
`;

export const StyledMenu = styled.div`
  padding-block: 0.5rem;
`;
