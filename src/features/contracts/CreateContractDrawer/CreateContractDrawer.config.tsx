import { ContractCreationFlow } from "@/services/ContractsService";

export const CONTRACT_OPTIONS = [
  {
    title: "AI-generated transaction",
    value: ContractCreationFlow.AI,
  },
  {
    title: "Hourly transaction",
    value: ContractCreationFlow.Hourly,
  },
  {
    title: "Fixed transaction",
    value: ContractCreationFlow.Fixed,
  },
];
