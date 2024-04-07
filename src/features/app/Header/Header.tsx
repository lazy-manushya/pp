import React from "react";

import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";

import { StyledHeader, StyledLogo } from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <StyledHeader>
      <StyledLogo />

      <Button variant="ghost">
        <Icon
          src="/assets/images/icons/search.svg"
          size="sm"
          colorVariant="black"
        />
      </Button>

      <Button variant="ghost">
        <Icon
          src="/assets/images/icons/bell.svg"
          size="sm"
          colorVariant="black"
        />
      </Button>
    </StyledHeader>
  );
};

export default Header;
