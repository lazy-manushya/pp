"use client";
import React, { useCallback, useState } from "react";

import Form from "@/components/input/Form";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./ContractRejectForm.config";
import {
  FormValues,
  IContractRejectFormProps,
} from "./ContractRejectForm.types";
import { ContractRejectFormProvider } from "./ContractRejectForm.context";

const ContractRejectForm: React.FC<IContractRejectFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;
  const [rejected, setRejected] = useState(false);

  const handleSubmit = useCallback((values: FormValues) => {
    console.log("DEBUG", { values });
    setRejected(true);
  }, []);

  return (
    <Form<FormValues>
      onSubmit={handleSubmit}
      yupValidationSchema={VALIDATION_SCHEMA}
      initialValues={initialValues}
    >
      <ContractRejectFormProvider {...props} rejected={rejected} />
    </Form>
  );
};

export default ContractRejectForm;
