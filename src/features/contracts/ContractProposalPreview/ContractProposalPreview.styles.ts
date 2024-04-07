"use client";

import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  padding-block: 2rem;
  background: #fbfbfb;
`;

export const StyledSectionHeading = styled.div`
  font-size: 16px;
  line-height: 170%;
  font-weight: 600;
  color: #171717;
`;

export const StyledContractDate = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #818898;
`;

export const StyledContractTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #0d0d12;
`;

export const StyledContractValue = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.03em;
  color: #0d0d12;
`;

export const StyledMainDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledDataLabel = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #818898;
`;

export const StyledDataValue = styled.div`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #0d0d12;
`;

export const StyledDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:not(:last-of-type) {
    border-bottom: 1px solid #f6f8fa;
  }

  td {
    min-width: fit-content;
    vertical-align: top;
    padding-block: 0.75rem;
  }

  td:first-of-type {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #818898;
    text-align: left;
    white-space: nowrap;
  }

  td:last-of-type {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #0d0d12;
    text-align: right;
    font-weight: 400;
  }
`;

export const StyledSmallText = styled.p`
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  margin: 0;
`;
