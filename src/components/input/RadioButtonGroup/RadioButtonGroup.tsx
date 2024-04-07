import React, { useCallback } from "react";

import RadioGroup, {
  RenderFunctionParams,
} from "@/components/input/RadioGroup";

import { StyledItem, StyledContainer } from "./RadioButtonGroup.styles";
import { IRadioButtonGroupProps } from "./RadioButtonGroup.types";

const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
  label,
  value,
  onChange,
  items,
  className,
}) => {
  const render = useCallback(
    ({
      isSelected,
      children,
      labelProps,
      inputProps,
      inputRef,
    }: RenderFunctionParams) => {
      return (
        <StyledItem {...labelProps} $isSelected={isSelected}>
          <input {...inputProps} ref={inputRef} />
          {children}
        </StyledItem>
      );
    },
    []
  );

  return (
    <StyledContainer
      label={label}
      value={value}
      onChange={onChange}
      className={className}
      renderRadio={render}
    >
      {items.map((item, i) => (
        <RadioGroup.Radio key={i} {...item} />
      ))}
    </StyledContainer>
  );
};

export default RadioButtonGroup;
