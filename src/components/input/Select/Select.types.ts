import { IDrawerProps } from "@/components/misc/Drawer";

export type Item<T> = { label: string; value: T };

export interface ISelectProps<T> {
  options: Item<T>[];
  value: T;
  onChange: (value: Item<T>) => void;
  isDisabled?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  drawerProps?: Omit<IDrawerProps, "isOpen" | "onRequestClose" | "children">;
}
