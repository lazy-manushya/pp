"use client";

import { squareSizing } from "@/utils/css";
import styled from "@emotion/styled";
import { DrawerPostion } from "./Drawer.types";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: background 300ms ease;
  animation: control-delay 500ms ease-out forwards;

  @keyframes control-delay {
    0% {
      pointer-events: none;
    }
    100% {
      pointer-events: all;
    }
  }
`;

export const StyledDrawer = styled.div<{
  $isDragging: boolean;
  $position: DrawerPostion;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 8;
  display: flex;
  flex-direction: column;
  ${({ $position }) =>
    $position !== DrawerPostion.closed ? "" : "padding-bottom: 86px;"};
  border: 1px solid #efefef;
  width: 100vw;
  height: 50vh;
  background: #fff;
  border-top-left-radius: ${({ $position, $isDragging }) =>
    $position === DrawerPostion.fullScreen && !$isDragging ? 0 : "2rem"};
  border-top-right-radius: ${({ $position, $isDragging }) =>
    $position === DrawerPostion.fullScreen && !$isDragging ? 0 : "2rem"};
  box-shadow: 0 -2px 40px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: border-radius 120ms ease;
  ${({ $isDragging }) => ($isDragging ? `` : `transition: height 120ms ease;`)};
  animation-delay: 180ms;
`;

export const StyledHeader = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 1.5rem   ;
`;

export const StyledHandle = styled.div`
  position: relative;
  ${squareSizing("40px")};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 4px;
    background: #e7e7e7;
    border-radius: 10rem;
  }
`;

export const StyledContentContainer = styled.div<{ $isDragging: boolean }>`
  flex: 1;
  overflow: ${({ $isDragging }) => ($isDragging ? "hidden" : "auto")};
`;
