import React from "react";

import { StyledContainer } from "./PlaceholderComponent.styles";
import { IPlaceholderComponentProps } from "./PlaceholderComponent.types";

const PlaceholderComponent: React.FC<IPlaceholderComponentProps> = ({
  title,
}) => {
  return (
    <StyledContainer>
      <h1>{title}</h1>
    </StyledContainer>
  );
};

export default PlaceholderComponent;
