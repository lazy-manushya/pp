"use client";

import styled from "@emotion/styled";

import Button from "@/components/input/Button";
import { squareSizing } from "@/utils/css";

export const StyledCard = styled.div`
  padding-block: 1rem;
`;

export const StyledInnerContainer = styled.div`
  position: relative;
`;

export const StyledTopSection = styled.div`
  padding-right: 2.5rem;
`;

export const StyledButton = styled(Button)`
  ${squareSizing("1.5rem")};
  position: absolute;
  top: 0;
  right: 0;
  border: 1.5px solid #f2f2f2;
`;

export const StyledPrimaryText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #0d0d12;
`;

export const StyledSecondaryText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #818898;
`;

export const StyledValue = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #0d0d12;
  text-align: end;
  margin-top: -6px;
`;

export const StyledBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
