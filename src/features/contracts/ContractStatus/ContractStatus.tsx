import React from "react";

import { StyledContainer } from "./ContractStatus.styles";
import { IContractStatusProps } from "./ContractStatus.types";
import { STATUS_CONFIG } from "./ContractStatus.config";

const ContractStatus: React.FC<IContractStatusProps> = ({
  status,
  className,
}) => {
  return (
    <StyledContainer $status={status} className={className}>
      {STATUS_CONFIG[status].label}
    </StyledContainer>
  );
};

export default ContractStatus;
