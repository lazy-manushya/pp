"use client";

import styled from "@emotion/styled";

import RadioGroup from "@/components/input/RadioGroup";

export const StyledContainer = styled(RadioGroup.Container)`
  display: flex;
  gap: 1rem;
`;

export const StyledItem = styled.label<{ $isSelected: boolean }>`
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 0.75rem;
  transition: background 120ms ease;
  will-change: background;

  ${({ $isSelected }) =>
    $isSelected
      ? `
        background: #0D0D12;
        color: #fff;
        border: 1px solid #0D0D12;

        & > * {
            filter: brightness(0) invert(1);
        }
    `
      : `
        background: #fff;
        color: #A4ACB9;
        border: 1px solid #dfe1e7;

        & > * {
            filter: brightness(0) invert(76%) sepia(1%) saturate(2315%) hue-rotate(181deg) brightness(91%) contrast(90%);
        }
    `};

  input {
    display: none;
  }
`;
