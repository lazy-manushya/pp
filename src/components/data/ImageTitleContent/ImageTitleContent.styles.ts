"use client";

import styled from "@emotion/styled"; 

import { Body, Heading } from "@/components/Typography";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledPrimaryText = styled(Heading)`
  color: #0d0d12;
  margin-top: 0.5rem;
  text-align: center;
`;

export const StyledSecondaryText = styled(Body)`
  color: #818898;
  margin-top: 0.5rem;
  max-width: 28ch;
  text-align: center;
`;
