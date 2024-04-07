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
  ContractRejectFormRef,
  FormValues,
  IContractRejectFormContext,
  IContractRejectFormProps,
  Step,
} from "./ContractRejectForm.types";
import {
  StyledBottomSection,
  StyledButton,
  StyledForm,
  StyledStepsContainer,
} from "./ContractRejectForm.styles";
import { STEPS_CONFIG, STEPS_LIST } from "./ContractRejectForm.config";
import RejectSuccessScreen from "./screens/SuccessScreen/RejectSuccessScreen";

const INITIAL_VALUES = {} as IContractRejectFormContext;

const ContractRejectFormContext = createContext(INITIAL_VALUES);

export const useContractRejectForm = () =>
  useContext(ContractRejectFormContext);

export const ContractRejectFormProvider: React.FC<
  IContractRejectFormProps & { rejected: boolean }
> = ({ getFormRef, onStepChange, rejected }) => {
  const router = useRouter();

  const ref = useRef({} as ContractRejectFormRef);
  const stepContainerElRef = useRef<HTMLDivElement | null>(null);

  const formContextValue = useForm<FormValues>();
  const { submitForm, values } = formContextValue;

  const [currentStep, setCurrentStep] = useState<Step>(Step.Reason);

  const ctaButtonProps = useMemo(() => {
    const props: IButtonProps = { children: "Send" };

    props.disabled = !values.reason || !values.rejectionType;

    return props;
  }, [values]);

  const isLastStep = currentStep === STEPS_LIST[STEPS_LIST.length - 1].id;

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
    console.log("DEBUG", { values });
  }, [values]);

  // ---------------------

  const form = (
    <StyledForm>
      <StyledStepsContainer ref={stepContainerElRef}>
        {renderStep()}
      </StyledStepsContainer>

      <StyledBottomSection>
        <StyledButton
          className="w-100"
          onClick={handleClick}
          {...ctaButtonProps}
        />
      </StyledBottomSection>
    </StyledForm>
  );

  return (
    <ContractRejectFormContext.Provider
      value={{
        ...formContextValue,
        currentStep,
      }}
    >
      {rejected ? <RejectSuccessScreen /> : form}
    </ContractRejectFormContext.Provider>
  );
};
