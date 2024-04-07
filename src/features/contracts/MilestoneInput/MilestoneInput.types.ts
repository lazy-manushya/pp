import { ContractMilestone } from "@/services/ContractsService";

export type Milestone = ContractMilestone;

export interface IMilestoneInputProps {
  value: Milestone[];
  onChange: (value: Milestone[]) => void;
  className?: string;
}
