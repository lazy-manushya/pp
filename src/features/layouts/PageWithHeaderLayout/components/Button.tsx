import React from "react";

import { IButtonProps } from "@/components/input/Button";

import { StyledButton } from "./Header/Header.styles";

const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton variant="ghost" {...props} />;
};

export default Button;
