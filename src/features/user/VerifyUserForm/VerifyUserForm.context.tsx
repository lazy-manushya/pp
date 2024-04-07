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
  VerifyUserFormRef,
  FormValues,
  IVerifyUserFormContext,
  IVerifyUserFormProps,
  Step,
} from "./VerifyUserForm.types";
import {
  StyledBottomSection,
  StyledButton,
  StyledForm,
  StyledStepsContainer,
} from "./VerifyUserForm.styles";
import { STEPS_CONFIG, STEPS_LIST } from "./VerifyUserForm.config";

const INITIAL_VALUES = {} as IVerifyUserFormContext;

const VerifyUserFormContext = createContext(INITIAL_VALUES);

export const useVerifyUserForm = () => useContext(VerifyUserFormContext);

export const VerifyUserFormProvider: React.FC<IVerifyUserFormProps> = ({
  getFormRef,
  onStepChange,
}) => {
  const router = useRouter();

  const ref = useRef({} as VerifyUserFormRef);
  const stepContainerElRef = useRef<HTMLDivElement | null>(null);

  const formContextValue = useForm<FormValues>();
  const { submitForm, values } = formContextValue;

  const [currentStep, setCurrentStep] = useState<Step>(Step.Details);
  const [otpVerified, _] = useState(false);

  const ctaButtonProps = useMemo(() => {
    const props: IButtonProps = { children: "Continue" };

    if (currentStep === Step.Details) {
      props.disabled = !values.firstName || !values.lastName || !values.email;
    }

    if (currentStep === Step.VerifyOtp) {
      props.disabled = otpVerified ? false : !values.otp;
      props.children = "Proceed as";
    }

    return props;
  }, [currentStep, values, otpVerified]);

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

  return (
    <VerifyUserFormContext.Provider
      value={{
        ...formContextValue,
        currentStep,
      }}
    >
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
    </VerifyUserFormContext.Provider>
  );
};
