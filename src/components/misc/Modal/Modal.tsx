import React from "react";
import { Overlay, useModalOverlay, useOverlayTrigger } from "react-aria";

import { StyledContainer } from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal: React.FC<IModalProps> = ({ state, children, ...restProps }) => {
  const ref = React.useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(restProps, state, ref);
  const { overlayProps } = useOverlayTrigger({ type: "dialog" }, state);

  if (!state.isOpen) {
    return null;
  }

  return (
    <Overlay>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.5)",
        }}
        {...underlayProps}
      >
        <StyledContainer
          {...modalProps}
          ref={ref}
          style={{
            position: "relative",
            background: "#fff",
            border: "1px solid gray",
          }}
        >
          {!!children && React.cloneElement(<>{children}</>, overlayProps)}
        </StyledContainer>
      </div>
    </Overlay>
  );
};

export default Modal;
