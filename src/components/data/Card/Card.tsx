import React from "react";

import { StyledCard } from "./Card.styles";
import { ICardProps } from "./Card.types";

const Card: React.FC<ICardProps> = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
