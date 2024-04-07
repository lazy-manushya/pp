import { OverlayTriggerState } from "react-stately";

import { IButtonProps } from "@/components/input/Button";
import { IPopoverProps } from "@/components/misc/Popover";

export interface IPopoverButtonProps {
  buttonProps?: IButtonProps;
  popoverProps?: Omit<IPopoverProps, "state" | "triggerRef">;
  state?: OverlayTriggerState;
}
