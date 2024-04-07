import React, { useCallback } from "react";

import RadioGroup, {
  RenderFunctionParams,
} from "@/components/input/RadioGroup";
import Icon from "@/components/misc/Icon";

import {
  StyledItem,
  StyledContainer,
  StyledContent,
  StyledIconContainer,
  StyledSelectedIconContainer,
} from "./RadioCardGroup.styles";
import { IRadioCardGroupProps, Item } from "./RadioButtonGroup.types";

const RadioCardGroup: React.FC<IRadioCardGroupProps> = ({
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
      icon,
      disabled = false,
    }: RenderFunctionParams & Item) => {
      return (
        <StyledItem
          {...labelProps}
          $isSelected={isSelected}
          $disabled={disabled}
        >
          <input {...inputProps} ref={inputRef} disabled={disabled} />
          {!!icon && (
            <StyledIconContainer $isSelected={isSelected}>
              <Icon src={icon} size="sm" />
            </StyledIconContainer>
          )}
          <StyledContent $isSelected={isSelected}>{children}</StyledContent>
          <StyledSelectedIconContainer
            $isSelected={isSelected}
            $disabled={disabled}
          >
            {isSelected && (
              <Icon
                isSrcRelative
                src="check.svg"
                size="xxs"
                customSize="0.75rem"
              />
            )}
          </StyledSelectedIconContainer>
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
      renderRadio={render as any}
    >
      {items.map((item, i) => (
        <RadioGroup.Radio key={i} {...item} />
      ))}
    </StyledContainer>
  );
};

export default RadioCardGroup;
