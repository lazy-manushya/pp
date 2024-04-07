import { AriaModalOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";

export type State = OverlayTriggerState;

export interface IModalProps extends AriaModalOverlayProps {
  state: State;
  children?: React.ReactNode;
}
