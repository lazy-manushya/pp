"use client";

import styled from "@emotion/styled";

import ContractProposalPreview from "@/features/contracts/ContractProposalPreview";

export const StyledPage = styled.div`
  height: 100%;
`;

export const StyledProposalStep = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledProposalPreview = styled(ContractProposalPreview)`
  flex: 1;
  overflow: auto;
`;

export const StyledProposalControls = styled.div`
  padding: 1rem;
`;

export const StyledProposalButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  & > * {
    flex: 1;
    padding: 1rem !important;
  }
`;

export const StyledSmallText = styled.p`
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  margin: 0;

  a {
    color: var(--clr-primary-500) !important;
    font-weight: 500;
  }
`;
