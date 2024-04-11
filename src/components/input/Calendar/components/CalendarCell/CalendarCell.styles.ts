"use client";

import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  width: 220px;

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

  table {
    width: 100%;
  }

  .cell {
    cursor: default;
    text-align: center;
  }

  .selected {
    background: var(--blue);
    color: white;
  }

  .unavailable {
    color: var(--spectrum-global-color-red-600);
  }

  .disabled {
    color: gray;
  }
`;
