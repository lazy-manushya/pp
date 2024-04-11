"use client";
import React, { useCallback, useState } from "react";

import Form from "@/components/input/Form";
import { contractService } from "@/config/services";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./ContractRejectForm.config";
import {
  FormValues,
  IContractRejectFormProps,
} from "./ContractRejectForm.types";
import { ContractRejectFormProvider } from "./ContractRejectForm.context";

const ContractRejectForm: React.FC<IContractRejectFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES, contractId } = props;
  const [rejected, setRejected] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const handleSubmit = useCallback(
    (values: FormValues) => {
      if (isRejecting) return;

      setIsRejecting(true);

      contractService
        .rejectContract(contractId, values)
        .then((rejected) => {
          if (rejected) {
            setRejected(true);
          } else {
            
          }
        })
        .finally(() => {
          setIsRejecting(false);
        });
    },
    [contractId, isRejecting]
  );

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
