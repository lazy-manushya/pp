import React from "react";
import Image from "next/image";

import {
  StyledContainer,
  StyledPrimaryText,
  StyledSecondaryText,
} from "./ImageTitleContent.styles";
import { IImageTitleContentProps } from "./ImageTitleContent.types";

const ImageTitleContent: React.FC<IImageTitleContentProps> = ({
  image,
  title,
  content,
  className,
}) => {
  return (
    <StyledContainer className={className}>
      <Image priority src={image} alt="" width={120} height={118} />

      <StyledPrimaryText size="lg" as="h2">
        {title}
      </StyledPrimaryText>
      <StyledSecondaryText size="md">{content}</StyledSecondaryText>
    </StyledContainer>
  );
};

export default ImageTitleContent;
