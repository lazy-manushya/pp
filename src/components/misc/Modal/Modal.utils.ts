import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";

export const useModalState = (data: OverlayTriggerProps = {}) =>
  useOverlayTriggerState(data);
