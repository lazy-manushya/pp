"use client";

import styled from "@emotion/styled";
import Link from "next/link";

import { squareSizing } from "@/utils/css";
import { transientOptions } from "@/styles";
import Button from "@/components/input/Button";

export const StyledNav = styled.div`
  position: relative;
  z-index: 10;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #ffffff;
`;

export const StyledLi = styled.li<{ $primary: boolean }>`
  flex: 1;
  min-height: 86px;

  ${({ $primary }) =>
    $primary
      ? `
        position: relative;

        &:before {
            ${squareSizing("60px")};
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #0D0D12;
            border-radius: 10rem;
        }
    `
      : ""}
`;

export const StyledLink = styled(Link, transientOptions)<{
  $primary: boolean;
  $active: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  text-decoration: none;

  ${({ $primary, $active }) =>
    $primary
      ? `
            filter: brightness(0) invert(1);
        `
      : $active
      ? `
            filter: brightness(0) invert(6%) sepia(33%) saturate(12%) hue-rotate(357deg) brightness(101%) contrast(84%);
        `
      : `
            filter: brightness(0) invert(55%) sepia(8%) saturate(620%) hue-rotate(184deg) brightness(96%) contrast(84%);
        `}
`;

export const StyledButton = styled(Button, transientOptions)<{
  $primary: boolean;
  $active: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 100%;
  text-decoration: none;

  ${({ $primary, $active }) =>
    $primary
      ? `
            filter: brightness(0) invert(1);
        `
      : $active
      ? `
            filter: brightness(0) invert(6%) sepia(33%) saturate(12%) hue-rotate(357deg) brightness(101%) contrast(84%);
        `
      : `
            filter: brightness(0) invert(55%) sepia(8%) saturate(620%) hue-rotate(184deg) brightness(96%) contrast(84%);
        `}
`;

export const StyledTitle = styled.div`
  position: absolute;
  bottom: 0.7rem;
  font-size: 12px;
  font-weight: 600;
`;
