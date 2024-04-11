import {
  ContractCompleteDetails,
  CreatedContractDetails,
} from "./ContractsService.types";

export function contractModelToCompleteDetails(
  data: CreatedContractDetails
): ContractCompleteDetails {
  const updatedData: ContractCompleteDetails = {
    ...data,
    rejectedBy: null,
    acceptedBy: null,
    history: [],
    files: [],
    milestones: [],
  };

  return updatedData;
}
