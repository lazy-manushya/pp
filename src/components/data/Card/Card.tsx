import React from "react";

import { StyledCard } from "./Card.styles";
import { ICardProps } from "./Card.types";

const Card: React.FC<ICardProps> = ({ children, className, onClick }) => {
  return (
    <StyledCard className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

export default Card;
