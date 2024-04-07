import React from "react";

import {
  ContractCreatorType,
  useSwitchCreatorType,
} from "@/services/ContractsService";

import {
  StyledButton,
  StyledContainer,
  StyledValue,
} from "./ContractCreatorSwitcher.styles";
import { IContractCreatorInputProps } from "./ContractCreatorSwitcher.types";

const ContractCreatorInput: React.FC<IContractCreatorInputProps> = () => {
  const { creatorType, inProgress, switched, switchCreatorType } =
    useSwitchCreatorType();

  const valueText =
    creatorType === ContractCreatorType.Payee ? "Payee" : "Payer";
  const buttonText = inProgress
    ? "Switching..."
    : switched
    ? "Switched!"
    : "Switch";

  return (
    <StyledContainer>
      <div>
        <div>You are currently creating as a</div>
        <StyledValue className="mt-1">{valueText}</StyledValue>
      </div>

      <StyledButton variant="ghost" onClick={switchCreatorType}>
        {buttonText}
      </StyledButton>
    </StyledContainer>
  );
};

export default ContractCreatorInput;
