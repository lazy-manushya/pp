"use client";

import Card from "@/components/data/Card";
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

export const StyledReviewSubmissionCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1.5rem;

  & > span {
    flex: 1;
  }
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
