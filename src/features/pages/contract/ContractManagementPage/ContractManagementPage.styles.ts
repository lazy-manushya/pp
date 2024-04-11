"use client";

import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;

  & > * {
    flex: 1;
    padding: 1rem !important;
  }
`;
