"use client";

import styled from "@emotion/styled";

import Logo from "@/features/app/Logo";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
`;

export const StyledLogo = styled(Logo)`
  margin-inline-end: auto;
`;
