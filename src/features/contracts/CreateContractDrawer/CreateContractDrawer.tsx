import React from "react";

import Drawer, { IDrawerProps } from "@/components/misc/Drawer";
import ContractCreatorInput from "@/features/contracts/ContractCreatorSwitcher";

import {
  StyledBody,
  StyledButton,
  StyledContainer,
  StyledHeading,
  StyledIcon,
} from "./CreateContractDrawer.styles";
import { CONTRACT_OPTIONS } from "./CreateContractDrawer.config";
import { SITE_PATHS } from "@/config/routing";

const CreateContractDrawer: React.FC<Omit<IDrawerProps, "children">> = (
  props
) => {
  return (
    <Drawer {...props}>
      <StyledContainer>
        <ContractCreatorInput />

        <StyledHeading size="lg" className="mt-4">
          Create a transaction
        </StyledHeading>
        <StyledBody size="md" className="mb-4">
          Choose any of these transaction that works for you
        </StyledBody>

        {CONTRACT_OPTIONS.map(({ title, value }) => (
          <StyledButton
            key={value}
            link={`${SITE_PATHS.CREATE_CONTRACT_PAGE}?flow=${value}`}
          >
            <StyledIcon isSrcRelative src="plus.svg" size="xs" /> {title}
          </StyledButton>
        ))}
      </StyledContainer>
    </Drawer>
  );
};

export default CreateContractDrawer;
