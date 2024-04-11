import * as yup from "yup";

import { FormValues, Step } from "./ContractRejectForm.types";
import ReasonStep from "./components/steps/ReasonStep";

export const VALIDATION_SCHEMA = yup.object().shape({
  reason: yup.string().required(),
  description: yup.string().required(),
});

export const INITIAL_VALUES: FormValues = {} as FormValues;

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

export const REJECTION_REASONS = [
  {
    label: "Do not agree to quoted amount",
    value: "Do not agree to quoted amount",
  },
  {
    label: "I hired someone else",
    value: "I hired someone else",
  },
];
