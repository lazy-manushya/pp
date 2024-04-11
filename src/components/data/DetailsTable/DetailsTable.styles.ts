"use client";

import styled from "@emotion/styled";

export const StyledTable = styled.table`
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
