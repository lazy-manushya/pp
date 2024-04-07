import React from "react";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";

import Button from "@/components/input/Button";
import Popover from "@/components/misc/Popover";

import { IPopoverButtonProps } from "./PopoverButton.types";
import { usePopoverState } from "./PopoverButton.utils";

const PopoverButton: React.FC<IPopoverButtonProps> = ({
  buttonProps = {},
  popoverProps = {},
  state: stateFromProps,
}) => {
  const ref = React.useRef(null);
  const localState = usePopoverState();
  const state = stateFromProps || localState;
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );
  const { children } = popoverProps;

  return (
    <>
      <Button {...buttonProps} {...triggerProps} ref={ref} />
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} {...popoverProps}>
          {!!children && React.cloneElement(<>{children}</>, overlayProps)}
        </Popover>
      )}
    </>
  );
};

export default PopoverButton;
