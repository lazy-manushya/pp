"use client";
import React, { useCallback } from "react";

import Form from "@/components/input/Form";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./VerifyUserForm.config";
import { FormValues, IVerifyUserFormProps } from "./VerifyUserForm.types";
import { VerifyUserFormProvider } from "./VerifyUserForm.context";

const VerifyUserForm: React.FC<IVerifyUserFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;

  const handleSubmit = useCallback((values: FormValues) => {
    console.log("DEBUG", { values });
  }, []);

  return (
    <Form<FormValues>
      onSubmit={handleSubmit}
      yupValidationSchema={VALIDATION_SCHEMA}
      initialValues={initialValues}
    >
      <VerifyUserFormProvider {...props} />
    </Form>
  );
};

export default VerifyUserForm;
