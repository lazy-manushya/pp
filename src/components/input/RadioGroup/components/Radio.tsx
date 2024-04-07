import React, { useRef } from "react";
import { useRadio } from "react-aria";

import { IRadioProps } from "../RadioGroup.types";
import { useRadioGroupContext } from "../RadioGroup.context";

const Radio: React.FC<IRadioProps> = (props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { children, render, value, disabled } = props;
  const { state, renderRadio } = useRadioGroupContext();

  const { inputProps, labelProps } = useRadio(
    {
      ...props,
      isDisabled: disabled,
    },
    state,
    ref
  );

  const isSelected = state.selectedValue === value;

  const customRenderFunction = renderRadio || render;

  if (customRenderFunction) {
    return customRenderFunction({
      ...props,
      isSelected,
      labelProps,
      inputProps,
      inputRef: ref,
    });
  }

  return (
    <label {...labelProps}>
      <input {...inputProps} ref={ref} disabled={disabled} />
      {children}
    </label>
  );
};

export default Radio;
