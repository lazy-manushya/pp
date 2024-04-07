export type DrawerState = "open-fullscreen" | "open" | "closed";

export interface IDrawerProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onChange?: (data: { state: DrawerState }) => void;
}
