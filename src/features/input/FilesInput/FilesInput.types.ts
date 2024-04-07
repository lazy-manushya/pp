import { MediaFile } from "@/services/MediaService";

export type FileObject = {
  file?: File;
  mediaFile?: MediaFile;
};

export interface IFilesInputProps {
  value: FileObject[];
  onChange?: (value: FileObject[]) => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  displayFileCount?: number;
}
