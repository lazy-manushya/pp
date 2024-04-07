import { AriaPopoverProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";

export type State = OverlayTriggerState;

export interface IPopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  state: State;
  children?: React.ReactNode;
  className?: string;
}
