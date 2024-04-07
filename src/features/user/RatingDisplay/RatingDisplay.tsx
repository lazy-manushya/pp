import React from "react";

import { StyledContainer } from "./RatingDisplay.styles";
import { IRatingDisplayProps } from "./RatingDisplay.types";
import Icon from "@/components/misc/Icon";

const RatingDisplay: React.FC<IRatingDisplayProps> = ({
  rating,
  reviewCount,
  className,
}) => {
  return (
    <StyledContainer className={className}>
      <Icon isSrcRelative src="star.svg" size="xs" />
      <b>{rating}</b>
      ({reviewCount > 1 ? `${reviewCount} reviews` : `1 review`})
    </StyledContainer>
  );
};

export default RatingDisplay;
