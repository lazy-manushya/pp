import { IButtonProps } from "@/components/input/Button";

export type FileTypeStyles = {
  iconBgColor: string;
  bgColor: string;
  iconUrl: string;
};

export interface IFileCardProps {
  name: string;
  sizeInBytes: number;
  fileUrl: string;
  deleteButtonProps?: IButtonProps;
  className?: string;
}
