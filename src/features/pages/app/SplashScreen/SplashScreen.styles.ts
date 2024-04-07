"use client";

import styled from "@emotion/styled";

import Logo from "@/features/app/Logo";

export const StyledPage = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--clr-primary-500);
`;

export const StyledLogo = styled(Logo)`
  filter: brightness(0) invert(1);
`;
