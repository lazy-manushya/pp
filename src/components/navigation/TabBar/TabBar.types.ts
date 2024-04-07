export type Item = {
  id: string;
  icon: string;
  link?: string;
  onClick?: (item: Item) => void;
  title: string;
  primary?: boolean;
  active?: boolean;
};

export interface ITabBarProps {
  items: Item[];
  className?: string;
}
