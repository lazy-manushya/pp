"use client";

import React, { useEffect, useMemo, useState } from "react";
import lodashGet from "lodash/get";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import ContractForm, {
  ContractFormRef,
  INITIAL_VALUES,
  STEPS_CONFIG,
  Step,
} from "@/features/contracts/ContractForm";
import PageWithHeaderLayoutProps, {
  HeaderButton,
} from "@/features/layouts/PageWithHeaderLayout";
import Icon from "@/components/misc/Icon";
import { selectCreatorType, useAppSelector } from "@/services/Store";
import {
  ContractCreationFlow,
  ContractType,
} from "@/services/ContractsService";

import { StyledPage } from "./CreateContractPage.styles";

const CreateContractPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const flowFormUrl = searchParams.get("flow");
  const flow = flowFormUrl ? (flowFormUrl as ContractCreationFlow) : undefined;

  const creatorType = useAppSelector(selectCreatorType);

  const [contractFormRef, setContractFormRef] = useState({} as ContractFormRef);
  const [currentStep, setCurrentStep] = useState<Step>();

  const formInitialValues = useMemo(
    () => ({
      ...INITIAL_VALUES,
      created_as: creatorType,
      flow,
      contract_type:
        flow === ContractCreationFlow.Fixed
          ? ContractType.OneTime
          : INITIAL_VALUES.contract_type,
    }),
    [creatorType, flow]
  );

  const stepTitle = lodashGet(STEPS_CONFIG, `[${currentStep}].title`, "");

  //-------------------

  useEffect(() => {
    if (flowFormUrl) {
      router.replace(pathname);
    }
  }, [router, flowFormUrl, searchParams, pathname]);

  //-------------------

  return (
    <PageWithHeaderLayoutProps
      headerProps={{
        titleProps: { children: stepTitle },
        backButtonProps: {
          onClick: contractFormRef?.previousStep,
        },
        appendContent:
          currentStep === Step.ContractDetails ? (
            <HeaderButton>
              <Icon isSrcRelative src="menu.svg" customSize="0.75rem" />
            </HeaderButton>
          ) : null,
      }}
    >
      <StyledPage>
        <ContractForm
          getFormRef={setContractFormRef}
          onStepChange={setCurrentStep}
          initialValues={formInitialValues}
        />
      </StyledPage>
    </PageWithHeaderLayoutProps>
  );
};

export default CreateContractPage;
