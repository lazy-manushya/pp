import * as yup from "yup";

import { FormValues, Step } from "./ContractRejectForm.types";
import ReasonStep from "./components/steps/ReasonStep";

export const VALIDATION_SCHEMA = yup.object().shape({});

export const INITIAL_VALUES: FormValues = {
  rejectionType: "",
  reason: "",
};

export const STEPS_CONFIG: Record<
  Step,
  {
    order: number;
    component: any;
    title: string;
  }
> = {
  [Step.Reason]: {
    order: 2,
    component: <ReasonStep />,
    title: "Reason for rejection",
  },
};

export const STEPS_LIST = Object.entries(STEPS_CONFIG)
  .map(([id, config]) => ({ id, ...config }))
  .sort((a, b) => a.order - b.order);
