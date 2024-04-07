import * as yup from "yup";

import { FormValues, Step } from "./VerifyUserForm.types";
import UserDetailsStep from "./components/steps/UserDetailsStep";
import VerifyOtpStep from "./components/steps/VerifyOtpStep";

export const VALIDATION_SCHEMA = yup.object().shape({});

export const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  otp: "",
};

export const STEPS_CONFIG: Record<
  Step,
  {
    order: number;
    component: any;
    title: string;
  }
> = {
  [Step.Details]: { order: 2, component: <UserDetailsStep />, title: "" },
  [Step.VerifyOtp]: {
    order: 3,
    component: <VerifyOtpStep />,
    title: "",
  },
};

export const STEPS_LIST = Object.entries(STEPS_CONFIG)
  .map(([id, config]) => ({ id, ...config }))
  .sort((a, b) => a.order - b.order);
