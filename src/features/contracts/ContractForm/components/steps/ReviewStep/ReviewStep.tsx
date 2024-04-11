import React, { useMemo } from "react";

import { ContractType } from "@/services/ContractsService";
import { formatDate } from "@/utils/date";
import MilestonesDisplay from "@/features/contracts/MilestonesDisplay";
import FilesInput from "@/features/input/FilesInput";
import DetailsTable, { Item } from "@/components/data/DetailsTable";

import { useContractForm } from "../../../ContractForm.context";
import {
  StyledContractTitle,
  StyledContractValue,
  StyledSection,
  StyledSectionHeading,
} from "./ReviewStep.styles";

const ReviewStep: React.FC = () => {
  const { values, setFieldValue } = useContractForm();

  const {
    title,
    milestones,
    client_name,
    client_email_number,
    contract_type,
    start_date,
    end_date,
    description,
  } = values;

  const totalValue = useMemo(
    () => milestones.reduce((sum, { value }) => sum + value, 0),
    [milestones]
  );

  const detailFields = useMemo(() => {
    let fields: Item[] = [
      {
        label: "Client's email",
        value: client_email_number,
      },
      {
        label: "Client's name",
        value: client_name,
      },
      {
        label: "Description",
        value: description,
      },
    ];

    if (contract_type !== ContractType.Milestone) {
      fields = fields.concat([
        {
          label: "Issued date",
          value: start_date ? formatDate(start_date) : "-",
        },
        {
          label: "Due date",
          value: end_date ? formatDate(end_date) : "-",
        },
      ]);
    }

    return fields;
  }, [
    client_name,
    client_email_number,
    contract_type,
    start_date,
    end_date,
    description,
  ]);

  return (
    <>
      <StyledContractTitle>{title}</StyledContractTitle>
      <StyledContractValue>{totalValue}</StyledContractValue>

      <StyledSection className="mt-5">
        <StyledSectionHeading>Contract details</StyledSectionHeading>

        <DetailsTable items={detailFields} />
      </StyledSection>

      <StyledSection className="mt-4">
        <StyledSectionHeading>Milestones</StyledSectionHeading>
        <MilestonesDisplay className="mt-4" milestones={milestones} />
      </StyledSection>

      <StyledSection className="mt-4">
        <FilesInput
          disabled
          className="mt-3"
          value={values.files}
          onChange={(value) => {
            setFieldValue("files", value);
          }}
          label="Attached files"
        />
      </StyledSection>
    </>
  );
};

export default ReviewStep;
