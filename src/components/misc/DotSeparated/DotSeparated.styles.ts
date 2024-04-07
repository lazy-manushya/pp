"use client";

import { squareSizing } from "@/utils/css";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
  line-height: 1rem;
  font-weight: 500;
  color: #818898;
`;

export const StyledDot = styled.div`
  ${squareSizing("4px")};
  background: #dfe1e7;
  border-radius: 10rem;
`;
