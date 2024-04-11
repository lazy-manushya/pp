"use client";

import { squareSizing } from "@/utils/css";
import styled from "@emotion/styled";

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  height: 100%;

  & > tbody {
    flex: 1;
    display: flex;
    flex-direction: column;

    & > tr {
      flex: 1;
    }
  }

  tr {
    display: flex;
    justify-content: space-between;
  }

  th {
    width: 44px;
    color: #a4acb9;
    font-weight: 400;
    padding-block: 0.5rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 8px;
  }

  .header h2 {
    flex: 1;
    margin: 0;
  }
`;

export const StyledCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCellButton = styled.div<{
  $isSelected: boolean;
  $isOutsideVisibleRange: boolean;
}>`
  ${squareSizing("44px")};
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #0d0d12;

  ${({ $isSelected, $isOutsideVisibleRange }) =>
    $isSelected
      ? `
      background: #5F57FF;
      color: #fff;
    `
      : $isOutsideVisibleRange
      ? `
      color: #C1C7D0;
    `
      : `&:hover {
      background: var(--clr-primary-200);
    }`};
`;
