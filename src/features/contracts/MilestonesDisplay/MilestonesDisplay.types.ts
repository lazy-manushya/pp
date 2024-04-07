import { ContractMilestone } from "@/services/ContractsService";

export type Milestone = ContractMilestone;

export interface IMilestoneInputProps {
  milestones: Milestone[];
  className?: string;
}
