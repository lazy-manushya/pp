"use client";

import styled from "@emotion/styled";

import RadioGroup from "@/components/input/RadioGroup";
import { squareSizing } from "@/utils/css";

export const StyledContainer = styled(RadioGroup.Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledIconContainer = styled.div<{ $isSelected: boolean }>`
  ${squareSizing("44px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f5f5f5;
  border-radius: 10rem;
  background: #fff;

  ${({ $isSelected }) =>
    $isSelected
      ? `
        border: 1px solid #E5E5E5;
    `
      : ` 
        border: 1px solid #ECEFF3;
    `};
`;

export const StyledSelectedIconContainer = styled.div<{
  $isSelected: boolean;
  $disabled: boolean;
}>`
  ${squareSizing("24px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f5f5f5;
  border-radius: 10rem;
  background: #fff;

  ${({ $isSelected, $disabled }) =>
    $disabled
      ? `
        border: 1px solid #DFE1E7;
        background: #DFE1E7;
        `
      : $isSelected
      ? `
        border: 1px solid #A19DF1;
        background: #A19DF1;
        `
      : ` 
        border: 1px solid #ECEFF3;
        `};
`;

export const StyledContent = styled.div<{ $isSelected: boolean }>`
  flex: 1;
`;

export const StyledItem = styled.label<{
  $isSelected: boolean;
  $disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  min-height: 66px;
  font-size: 1rem;
  font-weight: ${({ $disabled }) => ($disabled ? 600 : 500)};
  line-height: 160%;
  border-radius: 1rem;
  transition: background 120ms ease;
  will-change: background;

  ${({ $isSelected, $disabled }) =>
    $disabled
      ? `
        background: #A4ACB9;
        color: #fff; 
        `
      : $isSelected
      ? `
        background: var(--clr-primary-500);
        color: #fff; 
    `
      : `
        background: #FAFAFA;
        color: #171717; 
    `};

  input {
    display: none;
  }
`;
