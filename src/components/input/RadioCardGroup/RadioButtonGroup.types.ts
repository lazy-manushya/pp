export type Item = {
  value: string;
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
};

export interface IRadioCardGroupProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  items: Item[];
  className?: string;
}
