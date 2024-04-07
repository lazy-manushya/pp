import { IIconProps } from "@/components/misc/Icon/Icon.types";

export type Item = {
  id: string;
  icon: string;
  title: React.ReactNode;
  link?: string;
  onClick?: () => void;
  iconProps?: Omit<IIconProps, "src">;
  titleProps?: {
    style?: React.CSSProperties;
  };
};

export interface INavMenuProps {
  items: Item[];
  className?: string;
}
