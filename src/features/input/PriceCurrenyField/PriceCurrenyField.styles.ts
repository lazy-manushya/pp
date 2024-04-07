"use client";

import styled from "@emotion/styled";

import TextField from "@/components/input/TextField";

export const StyledContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const StyledPriceField = styled(TextField)`
  width: 98px;
`;

export const StyledCurrenyField = styled(TextField)`
  flex: 1;
`;
