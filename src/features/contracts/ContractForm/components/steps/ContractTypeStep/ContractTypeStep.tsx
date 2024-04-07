import React from "react";

import { Body } from "@/components/Typography";
import RadioCardGroup from "@/components/input/RadioCardGroup";
import { ContractType } from "@/services/ContractsService";

import { StyledStepHeading } from "../../../ContractForm.styles";
import { useContractForm } from "../../../ContractForm.context";
import { CONTRACT_TYPE_CONFIG } from "../../../ContractForm.config";
import { StyledButton } from "./ContractTypeStep.styles";

const ContractTypeStep: React.FC = () => {
  const { values, setFieldValue } = useContractForm();

  const { contract_type } = values;
  const title = contract_type
    ? CONTRACT_TYPE_CONFIG[contract_type]?.info?.title
    : "Choose engagement type";
  const description = contract_type
    ? CONTRACT_TYPE_CONFIG[contract_type]?.info?.description
    : "Click on the options below for more information.";

  return (
    <>
      <StyledStepHeading>{title}</StyledStepHeading>
      <Body
        size="lg"
        className="mt-2"
        style={{ color: "#818898", maxWidth: "34ch", marginBottom: "5rem" }}
      >
        {description}
      </Body>

      <RadioCardGroup
        label="contract-type"
        value={values.contract_type || ""}
        onChange={(value) => {
          setFieldValue("contract_type", value);
          setFieldValue("flow", value);
        }}
        items={[
          {
            children: "One-time",
            value: ContractType.OneTime,
          },
          {
            children: "milestones",
            value: ContractType.Milestone,
          },
          {
            children: "Hourly based",
            value: ContractType.Hourly,
            disabled: true,
          },
        ]}
      />

      {false && (
        <StyledButton disabled variant="secondary" className="w-100">
          Generate with AI
        </StyledButton>
      )}
    </>
  );
};

export default ContractTypeStep;
