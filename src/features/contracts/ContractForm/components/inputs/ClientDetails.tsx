import React from "react";

import TextField from "@/components/input/TextField";
import RadioButtonGroup from "@/components/input/RadioButtonGroup";

import { CLIENT_INPUT_OPTIONS } from "../../ContractForm.config";
import { useContractForm } from "../../ContractForm.context";
import { ClientInputType } from "../../ContractForm.types";
import { Body } from "@/components/Typography";

const ClientDetails: React.FC = () => {
  const { values, setFieldValue, clientInputType, setClientInputType } =
    useContractForm();

  return (
    <>
      <RadioButtonGroup
        className="mt-3"
        label="contract_type"
        value={clientInputType}
        onChange={setClientInputType as any}
        items={CLIENT_INPUT_OPTIONS}
      />

      {clientInputType === ClientInputType.PaypipeId ? (
        <TextField
          className="mt-3"
          label="Paypipe ID"
          value={values.client_paypipe_id}
          onChange={(value) => {
            setFieldValue("client_paypipe_id", value);
          }}
          prependContent={
            <Body size="lg" style={{ color: "#818898" }}>
              payp.me/
            </Body>
          }
        />
      ) : (
        <>
          <TextField
            className="mt-3"
            placeholder="Client email"
            value={values.client_email_number}
            onChange={(value) => {
              setFieldValue("client_email_number", value);
            }}
          />

          <TextField
            className="mt-3"
            placeholder="Client name"
            value={values.client_name}
            onChange={(value) => {
              setFieldValue("client_name", value);
            }}
          />
        </>
      )}
    </>
  );
};

export default ClientDetails;
