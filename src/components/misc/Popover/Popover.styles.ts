"use client";

import styled from "@emotion/styled";

export const StyledPopover = styled.div`
  background: #fff;
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 1rem;
  box-shadow: 0 40px 60 -12 rgba(0, 0, 0, 0.08), 0 0 14 -4 rgba(0, 0, 0, 0.05),
    0 32px 48 -8 rgba(0, 0, 0, 0.1);
`;

export const StyledUnderlay = styled.div`
  position: fixed;
  inset: 0;
`;

export const StyledArrow = styled.svg`
  position: absolute;
  fill: #fff;
  stroke: #fff;
  stroke-width: 1px;
  width: 12px;
  height: 12px;

  &[data-placement="top"] {
    top: 96%;
    transform: translateX(-50%) rotate(180deg);
  }

  &[data-placement="bottom"] {
    bottom: 96%;
    transform: translateX(-50%);
  }

  &[data-placement="left"] {
    left: 100%;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[data-placement="right"] {
    right: 100%;
    transform: translateY(-50%) rotate(90deg);
  }
`;
