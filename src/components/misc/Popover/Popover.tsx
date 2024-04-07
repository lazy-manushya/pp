import { useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";

import { IPopoverProps } from "./Popover.types";
import { StyledArrow, StyledPopover, StyledUnderlay } from "./Popover.styles";

const Popover: React.FC<IPopoverProps> = ({
  state,
  children,
  className,
  ...restProps
}) => {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...restProps,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <StyledUnderlay {...underlayProps} />
      <StyledPopover {...popoverProps} ref={popoverRef} className={className}>
        <StyledArrow
          {...arrowProps}
          data-placement={placement}
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.92712 1.68746L0 10H20L13.0729 1.68746C11.4737 -0.231555 8.5263 -0.231558 6.92712 1.68746Z"
            fill="white"
          />
        </StyledArrow>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </StyledPopover>
    </Overlay>
  );
};

export default Popover;
