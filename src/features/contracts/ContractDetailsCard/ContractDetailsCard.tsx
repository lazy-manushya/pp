import React, { useMemo } from "react";

import Icon from "@/components/misc/Icon";
import ContractStatusComponent from "@/features/contracts/ContractStatus";
import { ContractStatus } from "@/services/ContractsService";
import { selectUserData, useAppSelector } from "@/services/Store";

import {
  StyledBottomSection,
  StyledButton,
  StyledCard,
  StyledInnerContainer,
  StyledPrimaryText,
  StyledSecondaryText,
  StyledTopSection,
  StyledValue,
} from "./ContractDetailsCard.styles";
import { IContractDetailsCardProps } from "./ContractDetailsCard.types";
import DotSeparated from "@/components/misc/DotSeparated";

const ContractDetailsCard: React.FC<IContractDetailsCardProps> = ({
  contract,
  className,
}) => {
  const userData = useAppSelector(selectUserData);
  const { title, participants, total_value = 0, contract_type } = contract;

  const otherUserDetails = useMemo(() => {
    if (!userData) return null;

    return participants.find((p) => p.id !== userData.id) || null;
  }, [userData, participants]);

  return (
    <StyledCard className={className}>
      <StyledInnerContainer>
        <StyledTopSection>
          <StyledPrimaryText>{title}</StyledPrimaryText>
          <StyledSecondaryText>
            {otherUserDetails?.user.email}
          </StyledSecondaryText>
        </StyledTopSection>

        <StyledButton variant="secondary">
          <Icon isSrcRelative src="menu_bold.svg" customSize="0.75rem" />
        </StyledButton>

        <StyledValue>${total_value || 0}</StyledValue>

        <StyledBottomSection>
          <ContractStatusComponent status={ContractStatus.Active} />

          <DotSeparated>
            <span>{contract_type}</span>
            <span>22 days ago</span>
          </DotSeparated>
        </StyledBottomSection>
      </StyledInnerContainer>
    </StyledCard>
  );
};

export default ContractDetailsCard;
