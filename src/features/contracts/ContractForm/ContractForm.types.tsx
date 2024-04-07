import { IFormContext } from "@/components/input/Form";
import { FileObject } from "@/features/input/FilesInput";
import {
  ContractCreationFlow,
  ContractDetails,
} from "@/services/ContractsService";

export enum Step {
  ContractCreator = "ContractCreator",
  ContractType = "ContractType",
  ContractDetails = "ContractDetails",
  Review = "Review",
}

export type ContractFormValues = ContractDetails & {
  files: FileObject[];
  flow?: ContractCreationFlow;
  client_paypipe_id?: string;
};

export interface IContractFormProps {
  getFormRef?: (ref: ContractFormRef) => void;
  onStepChange?: (step: Step) => void;
  initialValues?: ContractFormValues;
}

export interface IContractFormContext extends IFormContext<ContractFormValues> {
  currentStep: Step;
  clientInputType: ClientInputType;
  setClientInputType: React.Dispatch<React.SetStateAction<ClientInputType>>;
}

export type ContractFormRef = {
  previousStep: () => void;
  nextStep: () => void;
};

export enum ClientInputType {
  PaypipeId = "PaypipeId",
  Email = "Email",
}
