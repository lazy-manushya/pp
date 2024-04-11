import React from "react";

import TextField from "@/components/input/TextField";
import RadioButtonGroup from "@/components/input/RadioButtonGroup";
import PriceCurrenyField from "@/features/input/PriceCurrenyField";
import { ContractType } from "@/services/ContractsService";
import MilestoneInput from "@/features/contracts/MilestoneInput";
import FilesInput from "@/features/input/FilesInput";
import DateField from "@/components/input/DateField";

import { StyledDatesContainer } from "./ContractDetailsStep.styles";
import { CONTRACT_TYPE_OPTIONS } from "../../../ContractForm.config";
import { StyledSectionHeading } from "../../../ContractForm.styles";
import { useContractForm } from "../../../ContractForm.context";
import ClientDetails from "../../inputs/ClientDetails";

const ContractDetailsStep: React.FC = () => {
  const { values, setFieldValue } = useContractForm();

  const isFixedContract = true;
  const isOneTimeContract = values.contract_type === ContractType.OneTime;
  const isMilestoneContract = values.contract_type === ContractType.Milestone;

  return (
    <>
      <ClientDetails />

      <TextField
        className="mt-3"
        placeholder="Transaction name"
        value={values.title}
        onChange={(value) => {
          setFieldValue("title", value);
        }}
      />

      <TextField
        textArea
        className="mt-3"
        placeholder="Description"
        value={values.description}
        onChange={(value) => {
          setFieldValue("description", value);
        }}
      />

      {isFixedContract ? (
        <>
          {isOneTimeContract && (
            <StyledDatesContainer className="mt-3">
              <DateField
                placeholder="Issued"
                value={values.start_date || ""}
                onChange={(value) => {
                  setFieldValue("start_date", value);
                }}
              />

              <DateField
                placeholder="Due date"
                value={values.end_date || ""}
                onChange={(value) => {
                  setFieldValue("end_date", value);
                }}
              />
            </StyledDatesContainer>
          )}

          {false && (
            <>
              <StyledSectionHeading className="mt-4">
                Transaction type
              </StyledSectionHeading>
              <RadioButtonGroup
                className="mt-3"
                label="contract_type"
                value={values.contract_type}
                onChange={(value) => {
                  setFieldValue("contract_type", value);
                }}
                items={CONTRACT_TYPE_OPTIONS}
              />
            </>
          )}

          {isOneTimeContract && (
            <PriceCurrenyField
              className="mt-3"
              currency={values.milestones[0]?.currency || ""}
              onCurrencyChange={(value) => {
                setFieldValue("milestones[0].currency", value);
              }}
              price={values.milestones[0]?.value || 0}
              onPriceChange={(value) => {
                setFieldValue("milestones[0].value", +value);
              }}
            />
          )}

          {isMilestoneContract && (
            <MilestoneInput
              className="mt-3"
              value={values.milestones}
              onChange={(value) => {
                setFieldValue("milestones", value);
              }}
            />
          )}
        </>
      ) : (
        <>
          <TextField className="mt-3" placeholder="Set weekly limit" />
          <TextField
            className="mt-3"
            placeholder="Set number of hours"
            type="number"
          />
          <PriceCurrenyField
            className="mt-3"
            currency={values.milestones[0]?.currency || ""}
            onCurrencyChange={(value) => {
              setFieldValue("values.milestones[0].currency", value);
            }}
            price={values.milestones[0]?.value || 0}
            onPriceChange={(value) => {
              setFieldValue("values.milestones[0].value", value);
            }}
          />
        </>
      )}

      <FilesInput
        className="mt-3"
        value={values.files}
        onChange={(value) => {
          setFieldValue("files", value);
        }}
        label={values.files.length > 0 ? "Attach more" : "Attach files"}
      />
    </>
  );
};

export default ContractDetailsStep;
