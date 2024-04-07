import React from "react";

import { Body } from "@/components/Typography";
import RadioCardGroup from "@/components/input/RadioCardGroup";
import { ContractCreatorType } from "@/services/ContractsService";

import { StyledStepHeading } from "../../ContractForm.styles";
import { useContractForm } from "../../ContractForm.context";

const ContractCreatorTypeStep: React.FC = () => {
  const { values, setFieldValue } = useContractForm();

  return (
    <>
      <StyledStepHeading>Create transaction as a</StyledStepHeading>
      <Body
        size="lg"
        className="mt-2"
        style={{ color: "#818898", maxWidth: "34ch", marginBottom: "5rem" }}
      >
        This information will determine how your transaction is created.
      </Body>

      <RadioCardGroup
        label="contract-creator-type"
        value={values.created_as || ""}
        onChange={(value) => setFieldValue("created_as", value)}
        items={[
          {
            children: "Payee",
            value: ContractCreatorType.Payee,
            icon: "/assets/images/icons/building.svg",
          },
          {
            children: "Payer",
            value: ContractCreatorType.Payer,
            icon: "/assets/images/icons/user.svg",
          },
        ]}
      />
    </>
  );
};

export default ContractCreatorTypeStep;
