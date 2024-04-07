import React from "react";

import TextField from "@/components/input/TextField";

import { useContractRejectForm } from "../../ContractRejectForm.context";
import Select from "@/components/input/Select";

const ReasonStep: React.FC = () => {
  const { values, setFieldValue } = useContractRejectForm();

  return (
    <>
      <Select
        placeholder="Rejection type"
        value={values.rejectionType}
        onChange={({ value }) => {
          setFieldValue("rejectionType", value);
        }}
        options={[
          {
            label: "Do not agree to quoted amount",
            value: "Do not agree to quoted amount",
          },
          {
            label: "I hired someone else",
            value: "I hired someone else",
          },
        ]}
        drawerProps={{
          drawerMidHeight:'204px'
        }}
      />

      <TextField
        textArea
        className="mt-3"
        placeholder="Your reasoning"
        value={values.reason}
        onChange={(value) => {
          setFieldValue("reason", value);
        }}
      />
    </>
  );
};

export default ReasonStep;
