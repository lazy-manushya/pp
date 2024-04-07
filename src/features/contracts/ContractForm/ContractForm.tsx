"use client";
import React, { useCallback, useState } from "react";

import Form from "@/components/input/Form";
import { contractService, mediaService } from "@/config/services";

import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./ContractForm.config";
import { ContractFormValues, IContractFormProps } from "./ContractForm.types";
import { ContractFormProvider } from "./ContractForm.context";

const ContractForm: React.FC<IContractFormProps> = (props) => {
  const { initialValues = INITIAL_VALUES } = props;

  const [creatingContract, setCreatingContract] = useState(false);
  const [contractCreated, setContractCreated] = useState(false);

  const handleSubmit = useCallback(
    (values: ContractFormValues) => {
      if (creatingContract) return;

      setCreatingContract(true);

      (async function () {
        try {
          const { files } = values;
          const attatchmentsRes = await Promise.all(
            files
              .filter(({ file }) => !!file)
              .map(({ file }) => mediaService.uploadFile(file as File))
          );

          const attatchmentIds = attatchmentsRes.map((res) => res.data.data.id);
          values.attachments = attatchmentIds;

          values.start_date = null;
          values.end_date = null;

          values.milestones = values.milestones.map((m) => ({
            ...m,
            start_date: null,
            end_date: null,
          }));

          await contractService.createContract(values);

          setContractCreated(true);
        } catch {
          setContractCreated(false);
        } finally {
          setCreatingContract(false);
        }
      })();
    },
    [creatingContract]
  );

  return (
    <Form<ContractFormValues>
      onSubmit={handleSubmit}
      yupValidationSchema={VALIDATION_SCHEMA}
      initialValues={initialValues}
    >
      <ContractFormProvider
        {...props}
        creatingContract={creatingContract}
        contractCreated={contractCreated}
      />
    </Form>
  );
};

export default ContractForm;
