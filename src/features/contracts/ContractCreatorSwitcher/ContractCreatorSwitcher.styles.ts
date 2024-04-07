"use client";

import styled from "@emotion/styled";

import Button from "@/components/input/Button";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #818898;
  background: #f6f8fa;
  border-radius: 0.5rem;
`;

export const StyledButton = styled(Button)`
  margin-inline: -0.5rem;
  font-weight: 600;
  line-height: 20px;
`;

export const StyledValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #0d0d12;
`;
