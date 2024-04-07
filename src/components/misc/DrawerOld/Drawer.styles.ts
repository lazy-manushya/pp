"use client";

import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  top: 0;
  left: 0;

  pointer-events: none;

  & > * {
    pointer-events: all;
  }
`;

export const StyledDrawer = styled.div<{ $y: number }>`
  --content-height: calc(100 * var(--vh, 1vh));
  --border-radius: ${(props) => ((props.$y || 0) < 80 ? "0px" : "6px")};
  display: flex;
  flex-direction: column;

  background: #fff;
  width: 100%;
  height: var(--content-height);
  min-height: var(--content-height);

  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  overflow: hidden;

  transform: translateY(50%);

  
`;

export const StyledBackDrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  animation: fade-in 400ms ease-out forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  height: -webkit-fill-available;
  overflow-y: auto;
`;

export const StyledHandle = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
