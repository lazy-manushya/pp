import styled from "styled-components";

const BackDrop = styled.div`
  position: fixed;
  height: calc(100 * var(--vh, 1vh));
  width: 100vw;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
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

export default BackDrop;
