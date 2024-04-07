"use client";

import styled from "@emotion/styled";

import Button from "@/components/input/Button";
import { squareSizing } from "@/utils/css";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem 4rem;
  width: 100%;
  min-height: 64px;
`;

export const StyledStartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translatey(-50%);
`;

export const StyledEndContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translatey(-50%);
`;

export const StyledTitle = styled.div`
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  color: #171717;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  ${squareSizing("2rem")};
  background-color: #f5f5f5;
`;

export const StyledBackButton = styled(StyledButton)`
  * > img {
    --size: 0.75rem;
  }
`;
