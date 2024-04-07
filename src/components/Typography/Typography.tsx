import React from "react";

import {
  IBodyProps,
  IDisplayProps,
  IHeadingProps,
  ILabelProps,
} from "./Typography.types";
import {
  StyledBody,
  StyledDisplay,
  StyledHeading,
  StyledLabel,
} from "./Typography.styles";
import {
  BODY_CONFIG,
  DISPLAY_CONFIG,
  HEADING_CONFIG,
  LABEL_CONFIG,
} from "./Typography.config";

export const Display: React.FC<IDisplayProps> = ({
  size,
  children,
  className,
  as,
  style = {},
}) => {
  return (
    <StyledDisplay
      style={{ ...style, ...DISPLAY_CONFIG[size].styles }}
      className={className}
      as={as}
    >
      {children}
    </StyledDisplay>
  );
};

export const Heading: React.FC<IHeadingProps> = ({
  size,
  children,
  className,
  as,
  style = {},
}) => {
  return (
    <StyledHeading
      style={{ ...style, ...HEADING_CONFIG[size].styles }}
      className={className}
      as={as}
    >
      {children}
    </StyledHeading>
  );
};

export const Label: React.FC<ILabelProps> = ({
  size,
  children,
  className,
  as,
  style = {},
}) => {
  return (
    <StyledLabel
      style={{ ...style, ...LABEL_CONFIG[size].styles }}
      className={className}
      as={as}
    >
      {children}
    </StyledLabel>
  );
};

export const Body: React.FC<IBodyProps> = ({
  size,
  children,
  className,
  as,
  style = {},
}) => {
  return (
    <StyledBody
      style={{ ...style, ...BODY_CONFIG[size].styles }}
      className={className}
      as={as}
    >
      {children}
    </StyledBody>
  );
};
