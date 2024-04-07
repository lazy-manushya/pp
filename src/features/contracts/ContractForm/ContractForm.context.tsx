import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import { useForm } from "@/components/input/Form";
import { IButtonProps } from "@/components/input/Button";

import {
  ClientInputType,
  ContractFormRef,
  ContractFormValues,
  IContractFormContext,
  IContractFormProps,
  Step,
} from "./ContractForm.types";
import {
  StyledBottomSection,
  StyledButton,
  StyledForm,
  StyledSmallText,
  StyledStepsContainer,
} from "./ContractForm.styles";
import { STEPS_CONFIG, STEPS_LIST } from "./ContractForm.config";
import Link from "next/link";
import SuccessScreen from "./components/screens/SuccessScreen";

const INITIAL_VALUES = {} as IContractFormContext;

const ContractFormContext = createContext(INITIAL_VALUES);

export const useContractForm = () => useContext(ContractFormContext);

export const ContractFormProvider: React.FC<
  IContractFormProps & { creatingContract: boolean; contractCreated: boolean }
> = ({ getFormRef, onStepChange, creatingContract, contractCreated }) => {
  const router = useRouter();

  const ref = useRef({} as ContractFormRef);
  const stepContainerElRef = useRef<HTMLDivElement | null>(null);

  const formContextValue = useForm<ContractFormValues>();
  const { submitForm, values } = formContextValue;

  const [currentStep, setCurrentStep] = useState<Step>(Step.ContractCreator);
  const [clientInputType, setClientInputType] = useState<ClientInputType>(
    !values.client_paypipe_id && !!values.client_email_number
      ? ClientInputType.Email
      : ClientInputType.PaypipeId
  );

  const ctaButtonProps = useMemo(() => {
    const props: IButtonProps = { children: "Continue" };

    if (currentStep === Step.ContractCreator) {
      props.disabled = !values.created_as;
    }

    if (currentStep === Step.ContractType) {
      props.disabled = !values.contract_type;
    }

    if (currentStep === Step.ContractDetails) {
      props.children = "Review transaction";
    }

    return props;
  }, [currentStep, values]);

  const isLastStep = currentStep === STEPS_LIST[STEPS_LIST.length - 1].id;
  const isReviewStep = currentStep === Step.Review;

  // ---------------------

  const renderStep = useCallback(
    () => STEPS_CONFIG[currentStep].component,
    [currentStep]
  );

  const gotToStep = useCallback(
    (step: Step) => {
      setCurrentStep(step);

      if (onStepChange) {
        onStepChange(step);
      }

      if (stepContainerElRef.current) stepContainerElRef.current.scrollTop = 0;
    },
    [onStepChange]
  );

  const getStepIndex = useCallback((step: Step) => {
    const index = STEPS_LIST.findIndex(({ id }) => id === step);

    return index;
  }, []);

  const previousStep = useCallback(() => {
    const currentStepIndex = getStepIndex(currentStep);

    if (currentStepIndex === 0) {
      router.back();
      return;
    }

    const nextStepIndex = Math.max(0, currentStepIndex - 1);
    gotToStep(STEPS_LIST[nextStepIndex].id as Step);
  }, [currentStep, gotToStep, getStepIndex, router]);

  const nextStep = useCallback(() => {
    const currentStepIndex = getStepIndex(currentStep);

    if (currentStepIndex === STEPS_LIST.length - 1) {
      return;
    }

    const nextStepIndex = Math.min(STEPS_LIST.length - 1, currentStepIndex + 1);
    gotToStep(STEPS_LIST[nextStepIndex].id as Step);
  }, [currentStep, gotToStep, getStepIndex]);

  const handleClick = useCallback(() => {
    if (isLastStep) {
      submitForm();
    } else {
      nextStep();
    }
  }, [nextStep, isLastStep, submitForm]);

  // ---------------------

  useEffect(() => {
    ref.current = {
      nextStep,
      previousStep,
    };

    if (getFormRef) getFormRef(ref.current);
  }, [nextStep, previousStep, getFormRef]);

  useEffect(() => {
    gotToStep(Step.ContractCreator);
  }, [gotToStep]);

  useEffect(() => {
    console.log("DEBUG", { values });
  }, [values]);

  // ---------------------

  const form = (
    <StyledForm>
      <StyledStepsContainer ref={stepContainerElRef}>
        {renderStep()}
      </StyledStepsContainer>

      <StyledBottomSection>
        {isReviewStep && (
          <StyledSmallText className="mb-2">
            By selecting Continue you agree to accept our{" "}
            <Link href="#">Terms of Use</Link> and{" "}
            <Link href="#">Privacy Policy</Link>
          </StyledSmallText>
        )}

        <StyledButton
          className="w-100"
          onClick={handleClick}
          {...ctaButtonProps}
          disabled={creatingContract}
        />
      </StyledBottomSection>
    </StyledForm>
  );

  return (
    <ContractFormContext.Provider
      value={{
        ...formContextValue,
        currentStep,
        clientInputType,
        setClientInputType,
      }}
    >
      {contractCreated ? <SuccessScreen /> : form}
    </ContractFormContext.Provider>
  );
};
