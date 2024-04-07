import React from "react";
import isArray from "lodash/isArray";

import { StyledContainer, StyledDot } from "./DotSeparated.styles";
import { IDotSeparatedProps } from "./DotSeparated.types";

const DotSeparated: React.FC<IDotSeparatedProps> = ({
  children: childrenFromProps,
}) => {
  if (!childrenFromProps) {
    return null;
  }

  const children = isArray(childrenFromProps)
    ? childrenFromProps
    : [childrenFromProps];

  return (
    <StyledContainer>
      {children.map((child, i) => (
        <React.Fragment key={i}>
          {i !== 0 && <StyledDot />}
          {child}
        </React.Fragment>
      ))}
    </StyledContainer>
  );
};

export default DotSeparated;
