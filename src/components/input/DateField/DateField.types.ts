import { ITextFieldProps } from "@/components/input/TextField";
import { IDrawerProps } from "@/components/misc/Drawer";

export interface IDateFieldProps extends ITextFieldProps {
  drawerProps?: IDrawerProps;
}
