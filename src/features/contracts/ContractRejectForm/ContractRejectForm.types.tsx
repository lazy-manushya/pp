import { IFormContext } from "@/components/input/Form";

export enum Step {
  Reason = "Reason",
}

export type FormValues = {
  rejectionType: string;
  reason: string;
};

export interface IContractRejectFormProps {
  getFormRef?: (ref: ContractRejectFormRef) => void;
  onStepChange?: (step: Step) => void;
  initialValues?: FormValues;
}

export interface IContractRejectFormContext extends IFormContext<FormValues> {
  currentStep: Step;
}

export type ContractRejectFormRef = {
  previousStep: () => void;
  nextStep: () => void;
};