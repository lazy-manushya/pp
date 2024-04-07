import { getFileExtentionFromName } from "@/utils/files";

import { FILE_TYPE_CONFIG } from "./FileCard.config";

export function getFileConfig(fileName: string) {
  const extention = getFileExtentionFromName(fileName) || "";

  const fileType = Object.keys(FILE_TYPE_CONFIG).find((fileType) => {
    const { extensions } = FILE_TYPE_CONFIG[fileType];
    return extensions.includes(extention);
  });

  const config = fileType ? FILE_TYPE_CONFIG[fileType] : null;

  return config;
}
