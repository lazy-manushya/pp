export enum DrawerPostion {
  fullScreen = "fullScreen",
  midScreen = "midScreen",
  closed = "closed",
}

export interface IDrawerProps {
  isOpen: boolean;
  onRequestClose: () => void;
  drawerMidHeight?: string;
  className?: string;
  children?: React.ReactNode;
  canDrag?: boolean;
}
