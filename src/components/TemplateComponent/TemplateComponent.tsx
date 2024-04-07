import React from "react";

import { StyledContainer } from "./TemplateComponent.styles";
import { ITemplateComponentProps } from "./TemplateComponent.types";

const TemplateComponent: React.FC<ITemplateComponentProps> = () => {
  return <StyledContainer>Template Component</StyledContainer>;
};

export default TemplateComponent;
