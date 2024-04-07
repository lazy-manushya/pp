"use client";

import styled from "@emotion/styled";

import { squareSizing } from "@/utils/css";

export const StyledContainer = styled.div`
  counter-reset: section;
`;

export const StyledInputsContainer = styled.div<{
  $showCounter?: boolean;
}>`
  position: relative;
  padding-left: 3rem;
  padding-right: 1rem;

  & + & {
    margin-top: 2rem;
  }

  &:not(:last-child):before {
    content: "";
    height: calc(100% + 1.25rem);
    width: 2px;
    position: absolute;
    top: 2rem;
    left: 9px;
    background: #eceff3;
  }

  ${({ $showCounter }) =>
    $showCounter
      ? `
          &:after {
            ${squareSizing("21px")};
            counter-increment: section;
            content: counter(section);
            position: absolute;
            top: 23px;
            left: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            background: #000005;
            border-radius: 10rem;
          }
        `
      : ""}
`;

export const StyledFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledTopContainer = styled(StyledFieldContainer)`
  padding: 1rem;
  margin-inline: -1rem;
  background: #f8fafb;
  border-radius: 1rem;
`;

export const StyledFieldBGContainer = styled.div`
  padding: 1rem;
  margin-inline: -1rem;
  background: #f8fafb;
  border-radius: 1rem;
`;

export const StyledNameContainer = styled.div`
  flex: 1;
`;

export const StyledLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #818898;
`;

export const StyledValue = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #0d0d12;
  font-weight: 600;
`;

export const StyledValueLight = styled(StyledValue)`
  font-weight: 400;
`;

export const StyledValueBold = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #080808;
`;
