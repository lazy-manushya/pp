import React from "react";

import Icon from "@/components/misc/Icon";

import {
  StyledEndContainer,
  StyledHeader,
  StyledStartContainer,
  StyledTitle,
} from "./Header.styles";
import { IHeaderProps } from "./Header.types";
import Button from "../Button";

const Header: React.FC<IHeaderProps> = ({
  titleProps = {},
  backButtonProps = {},
  prependContent,
  appendContent,
}) => {
  const { children } = titleProps;
  const { show = true } = backButtonProps;

  return (
    <StyledHeader>
      <StyledStartContainer>
        {prependContent}

        {show && (
          <Button {...backButtonProps}>
            {backButtonProps?.children || (
              <Icon isSrcRelative src="chevron_left.svg" customSize="0.75rem" />
            )}
          </Button>
        )}
      </StyledStartContainer>

      <StyledTitle>{children}</StyledTitle>

      <StyledEndContainer>{appendContent}</StyledEndContainer>
    </StyledHeader>
  );
};

export default Header;
