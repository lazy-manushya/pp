import React, { useCallback, useState } from "react";
import { useSelectState } from "react-stately";

import Drawer from "@/components/misc/Drawer";

import { ISelectProps, Item } from "./Select.types";
import {
  StyledButton,
  StyledHeading,
  StyledIcon,
  StyledOptionButton,
  StyledOptionContainer,
} from "./Select.styles";
import Icon from "@/components/misc/Icon";
import { ANIMATION_CLASSNAMES } from "@/styles";

function Select<T = string>(props: ISelectProps<T>) {
  const {
    isDisabled,
    label,
    options,
    placeholder,
    value,
    onChange,
    className,
    drawerProps = {},
  } = props;

  const [selectedOption, setSelectedOption] = useState<Item<T> | null>(
    options.find((o) => o.value === value) || null
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleChange = useCallback(
    (item: Item<T>) => {
      onChange(item);
      setSelectedOption(item);
      close();
    },
    [onChange, close]
  );

  return (
    <>
      <StyledButton className={className} onClick={toggle}>
        <div>{selectedOption ? selectedOption.label : placeholder}</div>{" "}
        <Icon isSrcRelative src="chevron_down.svg" size="xxs" />
      </StyledButton>

      <Drawer
        {...drawerProps}
        isOpen={!isDisabled && isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <StyledHeading>Rejection reasons?</StyledHeading>

        <StyledOptionContainer className="mt-3">
          {options.map((item, i) => {
            const isSelected = selectedOption === item;

            return (
              <StyledOptionButton
                key={`${i}_${label}`}
                onClick={() => {
                  handleChange(item);
                }}
              >
                <div>{item.label}</div>
                {isSelected && (
                  <StyledIcon isSrcRelative src="tick.svg" size="xs" />
                )}
              </StyledOptionButton>
            );
          })}
        </StyledOptionContainer>
      </Drawer>
    </>
  );
}

export default Select;
