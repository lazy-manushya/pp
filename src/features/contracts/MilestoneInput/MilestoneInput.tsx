import React, { useCallback, useRef } from "react";

import TextField from "@/components/input/TextField";
import PriceCurrenyField from "@/features/input/PriceCurrenyField";
import { ContractCurrency } from "@/services/ContractsService";

import {
  StyledButton,
  StyledContainer,
  StyledDatesContainer,
  StyledInputsContainer,
} from "./MilestoneInput.styles";
import { IMilestoneInputProps, Milestone } from "./MilestoneInput.types";

const MilestoneInput: React.FC<IMilestoneInputProps> = ({
  value = [],
  onChange,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleChangeValue = useCallback(
    (index: number, key: string, fieldValue: any) => {
      const updatedValue = [...value];
      updatedValue[index] = { ...updatedValue[index], [key]: fieldValue };
      onChange(updatedValue);
    },
    [value, onChange]
  );

  const scrollToBottom = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.scrollIntoView(false);
    }
  }, []);

  const addMilestone = useCallback(() => {
    const updatedValue = [
      ...value,
      {
        name: "",
        description: "",
        start_date: null,
        end_date: null,
        currency: ContractCurrency.USD,
        value: 0,
      } as Milestone,
    ];
    onChange(updatedValue);

    setTimeout(scrollToBottom, 50);
    scrollToBottom();
  }, [value, onChange, scrollToBottom]);

  return (
    <StyledContainer ref={ref} className={className}>
      {value.map(
        ({ name, description, currency, value, start_date, end_date }, i) => {
          return (
            <StyledInputsContainer $showCounter key={`${name}_${i}`}>
              <TextField
                placeholder="Milestone name*"
                value={name}
                onChange={(value) => {
                  handleChangeValue(i, "name", value);
                }}
              />

              <TextField
                textArea
                className="mt-3"
                placeholder="Milestone description"
                value={description}
                onChange={(value) => {
                  handleChangeValue(i, "description", value);
                }}
              />

              <PriceCurrenyField
                className="mt-3"
                currency={currency || ""}
                onCurrencyChange={(value) => {
                  handleChangeValue(i, "currency", value);
                }}
                price={value || 0}
                onPriceChange={(value) => {
                  handleChangeValue(i, "value", value);
                }}
              />

              <StyledDatesContainer className="mt-3">
                <TextField
                  placeholder="Start date"
                  value={start_date || ""}
                  onChange={(value) => {
                    handleChangeValue(i, "start_date", value);
                  }}
                />

                <TextField
                  placeholder="Due date"
                  value={end_date || ""}
                  onChange={(value) => {
                    handleChangeValue(i, "end_date", value);
                  }}
                />
              </StyledDatesContainer>
            </StyledInputsContainer>
          );
        }
      )}

      <StyledInputsContainer className="mt-3">
        <StyledButton
          variant="ghost"
          colorVariant="black"
          onClick={addMilestone}
        >
          Add another milestone
        </StyledButton>
      </StyledInputsContainer>
    </StyledContainer>
  );
};

export default MilestoneInput;
