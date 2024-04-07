export type Item = {
  value: string;
  children?: React.ReactNode;
};

export interface IRadioButtonGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: Item[];
  className?: string;
}
