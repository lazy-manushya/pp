export type Item = {
  label: React.ReactNode;
  value: React.ReactNode;
};

export interface IDetailsTableProps {
  items: Item[];
  className?: string;
}
