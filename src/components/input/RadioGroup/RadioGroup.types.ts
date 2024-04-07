import { Orientation, RadioGroupState } from "react-stately";

export type RenderFunctionParams = Omit<IRadioProps, "render"> & {
  isSelected: boolean;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

export type RenderFunction = (data: RenderFunctionParams) => React.ReactNode;

export interface IRadioProps {
  value: string;
  children?: React.ReactNode;
  render?: RenderFunction;
  disabled?: boolean;
}

export interface IRadioGroupProps {
  value?: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  label: string;
  orientation?: Orientation;
  renderRadio?: RenderFunction;
  className?: string;
}

export interface IRadioGroupContext {
  state: RadioGroupState;
  renderRadio?: RenderFunction;
}
