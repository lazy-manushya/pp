import { getFileExtentionFromName } from "@/utils/files";
import { FileObject } from "@/features/input/FilesInput";

import { FILE_TYPE_CONFIG } from "./FileCard.config";
import { IFileCardProps } from "./FileCard.types";

export function getFileConfig(fileName: string) {
  const extention = getFileExtentionFromName(fileName) || "";

  const fileType = Object.keys(FILE_TYPE_CONFIG).find((fileType) => {
    const { extensions } = FILE_TYPE_CONFIG[fileType];
    return extensions.includes(extention);
  });

  const config = fileType ? FILE_TYPE_CONFIG[fileType] : null;

  return config;
}

export function getFileCardPropsFromFileObj(obj: FileObject) {
  const { file, mediaFile } = obj;

  if (mediaFile) {
    return {
      name: mediaFile.url || "Name not available",
      fileUrl: mediaFile.url,
      sizeInBytes: 0,
    } satisfies IFileCardProps;
  }

  if (file) {
    return {
      name: file.name,
      fileUrl: URL.createObjectURL(file),
      sizeInBytes: file.size,
    } satisfies IFileCardProps;
  }

  return null;
}
