import { IFormContext } from "@/components/input/Form";

export enum Step {
  Details = "Details",
  VerifyOtp = "VerifyOtp",
}

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  otp: string;
};

export interface IVerifyUserFormProps {
  getFormRef?: (ref: VerifyUserFormRef) => void;
  onStepChange?: (step: Step) => void;
  initialValues?: FormValues;
}

export interface IVerifyUserFormContext extends IFormContext<FormValues> {
  currentStep: Step;
}

export type VerifyUserFormRef = {
  previousStep: () => void;
  nextStep: () => void;
};
