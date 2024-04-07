"use client";

import styled from "@emotion/styled";

import ImageTitleContent from "@/components/data/ImageTitleContent";
import ContractDetailsCard from "@/features/contracts/ContractDetailsCard";

export const StyledPage = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: auto;
`;

export const StyledValue = styled.div`
  color: #080808;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const StyledPrimaryHeading = styled.div`
  display: flex;
  align-items: center;
  color: #0d0d12;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const StyledSecondaryHeading = styled.div`
  color: #b5b5b5;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5rem;

  & + * {
    margin-top: 0.5rem;
  }
`;

export const StyledContractsSection = styled.section`
  margin-top: 2rem;
`;

export const StyledNoContent = styled(ImageTitleContent)`
  margin-top: 4rem;
`;

export const StyledContractDetailsCard = styled(ContractDetailsCard)`
  margin-inline: 0.5rem;
  padding-block: 1.25rem;

  & + & {
    border-top: 1px solid #e9e9e9;
  }
`;
