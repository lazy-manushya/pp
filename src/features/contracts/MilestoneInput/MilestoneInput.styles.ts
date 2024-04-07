"use client";

import styled from "@emotion/styled";

import Button from "@/components/input/Button";
import { squareSizing } from "@/utils/css";

export const StyledContainer = styled.div`
  counter-reset: section;
`;

export const StyledDatesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledInputsContainer = styled.div<{
  $showCounter?: boolean;
}>`
  position: relative;
  padding-left: 2rem;

  & + & {
    margin-top: 2rem;
  }

  &:not(:last-child):before {
    content: "";
    height: calc(100% + 1rem);
    width: 2px;
    position: absolute;
    top: 2rem;
    left: 9px;
    background: #eceff3;
  }

  &:nth-last-of-type(2):before {
    height: 100%;
  }

  ${({ $showCounter }) =>
    $showCounter
      ? `
          &:after {
            ${squareSizing("21px")};
            counter-increment: section;
            content: counter(section);
            position: absolute;
            top: 18px;
            left: -1px;
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

export const StyledButton = styled(Button)`
  font-size: 1rem;
  padding-block: 0.8rem;

  &:after {
    ${squareSizing("23px")};
    content: "";
    position: absolute;
    top: 14px;
    left: -1px;
    background-image: url("/assets/images/icons/plus.svg");
    background-position: center;
    background-size: 65%;
    background-repeat: no-repeat;
    filter: brightness(0) invert(3%) sepia(42%) saturate(6431%) hue-rotate(264deg) brightness(112%) contrast(120%);
  }

  &:before {
    ${squareSizing("21px")};
    content: "";
    position: absolute;
    top: 14px;
    left: -1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    border: 1px dashed #a4acb9;
    border-radius: 10rem;
    background-color: #f6f8fa;
  }
`;
