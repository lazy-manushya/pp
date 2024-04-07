import styled from "styled-components";

const DrawerContainer = styled.div`
  position: fixed;
  height: calc(100 * var(--vh, 1vh));
  width: 100vw;
  z-index: var(--z-index-upper-layer);
  top: 0;
  left: 0;

  pointer-events: none;

  & > * {
    pointer-events: all;
  }
`;

export default DrawerContainer;
