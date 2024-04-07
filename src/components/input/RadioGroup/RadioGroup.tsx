import React from "react";
import { useRadioGroupState } from "react-stately";
import { useRadioGroup } from "react-aria";

import { RadioGroupContext } from "./RadioGroup.context";
import { IRadioGroupProps } from "./RadioGroup.types";

const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const {
    children,
    label,
    orientation = "horizontal",
    renderRadio,
    className,
  } = props;

  const state = useRadioGroupState({
    ...props,
    "aria-label": label,
    "aria-labelledby ": label,
    orientation,
  } as any);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className={className}>
      <RadioGroupContext.Provider value={{ state, renderRadio }}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

export default RadioGroup;
