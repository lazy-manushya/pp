import { IButtonProps } from "@/components/input/Button";

export interface IHeaderProps {
  titleProps?: { children?: React.ReactNode };
  backButtonProps?: IButtonProps & { show?: boolean };
  prependContent?: React.ReactNode;
  appendContent?: React.ReactNode;
}
