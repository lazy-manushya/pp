"use client";

import styled from "@emotion/styled";

import { squareSizing } from "@/utils/css";
import { ContractStatus } from "@/services/ContractsService";

import { STATUS_CONFIG } from "./ContractStatus.config";

export const StyledContainer = styled.div<{ $status: ContractStatus }>`
  display: inline-block;
  position: relative;
  font-size: 12px;
  line-height: 16px;
  color: #818898;
  padding: 4px 1rem;
  padding-left: 1.75rem;
  border-radius: 10rem;
  border: 1px solid #f6f8fa;

  &:before {
    ${squareSizing("12px")};
    content: "";
    position: absolute;
    top: 50%;
    left: 0.75rem;
    background: ${({ $status }) => STATUS_CONFIG[$status].color};
    border-radius: 10rem;
    transform: translateY(-50%);
  }
`;
