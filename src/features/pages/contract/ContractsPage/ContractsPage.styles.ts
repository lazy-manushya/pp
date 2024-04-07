"use client";

import styled from "@emotion/styled";

import ImageTitleContent from "@/components/data/ImageTitleContent";
import ContractDetailsCard from "@/features/contracts/ContractDetailsCard";

export const StyledPage = styled.div`
  position: relative;
  padding: 1rem;
  height: 100%;
  overflow: auto;
`;

export const StyledInputsContainer = styled.div`
  position: sticky;
  top: -18px;
  background: #fff;
  padding: 1rem;
  margin: -1rem;
  border-radius: inherit;
  z-index: 1;
`;

export const StyledNoContent = styled(ImageTitleContent)`
  margin-top: 4rem;
`;

export const StyledContractDetailsCard = styled(ContractDetailsCard)`
  margin-inline: 0.5rem;
  padding-block: 1.5rem;

  & + & {
    border-top: 1px solid #e9e9e9;
  }
`;
