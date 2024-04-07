export interface ITextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  prependContent?: any;
  appendContent?: any;
  label?: string;
  textArea?: boolean;
  inputClassName?: string;
  onChange?: (value: string) => void;
}
