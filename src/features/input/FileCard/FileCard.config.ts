import { FileTypeStyles } from "./FileCard.types";

export const FILE_TYPE_CONFIG: Record<
  string,
  {
    extensions: string[];
    styles: FileTypeStyles;
  }
> = {
  image: {
    extensions: ["png", "jpg", "jpeg", "svg"],
    styles: {
      iconBgColor: "#febe4c",
      bgColor: "#fcf2e1",
      iconUrl: "/assets/images/icons/image.svg",
    },
  },
  document: {
    extensions: ["docx", "pdf"],
    styles: {
      iconBgColor: "#dbe5fc",
      bgColor: "#f3f6fc",
      iconUrl: "/assets/images/icons/document.svg",
    },
  },
};
