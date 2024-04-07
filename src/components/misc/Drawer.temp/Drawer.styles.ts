"use client";

import { squareSizing } from "@/utils/css";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledDrawer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  transition: translate 100ms ease;
`;

export const StyledHandle = styled.div`
  ${squareSizing("100px")};
  border: 1px solid red;
  display: grid;
  place-items: center;
`;
