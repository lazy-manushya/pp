import React from "react";

import TextField from "@/components/input/TextField";
import Select from "@/components/input/Select";

import { useContractRejectForm } from "../../ContractRejectForm.context";
import { REJECTION_REASONS } from "../../ContractRejectForm.config";

const ReasonStep: React.FC = () => {
  const { values, setFieldValue } = useContractRejectForm();

  return (
    <>
      <Select
        placeholder="Rejection type?"
        value={values.reason || ""}
        onChange={({ value }) => {
          setFieldValue("reason", value);
        }}
        options={REJECTION_REASONS}
        drawerProps={{
          drawerMidHeight: "176px",
          headerProps: {
            children: "Rejection reasons?",
            className: "px-3 pb-2",
          },
        }}
      />

      <TextField
        textArea
        className="mt-3"
        placeholder="Your reasoning"
        value={values.description || ""}
        onChange={(value) => {
          setFieldValue("description", value);
        }}
      />
    </>
  );
};

export default ReasonStep;
