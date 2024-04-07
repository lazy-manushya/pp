import React from "react";

import Icon from "@/components/misc/Icon";
import { IButtonProps } from "@/components/input/Button";

import {
  StyledButton,
  StyledIconContainer,
  StyledLink,
  StyledNav,
  StyledTitle,
  StyledUl,
} from "./NavMenu.styles";
import { INavMenuProps } from "./NavMenu.types";

const NavMenu: React.FC<INavMenuProps> = ({ items, className }) => {
  return (
    <StyledNav className={className}>
      <StyledUl>
        {items.map(
          ({ id, icon, title, link, onClick, iconProps = {}, titleProps }) => {
            const Component = link ? StyledLink : StyledButton;
            const props: any = link
              ? { href: link }
              : ({ onClick, variant: "ghost" } satisfies IButtonProps);

            const titleStyles = titleProps?.style || {};

            return (
              <li key={id}>
                <Component {...props}>
                  <StyledIconContainer>
                    <Icon size="xs" {...iconProps} src={icon} />
                  </StyledIconContainer>
                  <StyledTitle style={titleStyles}>{title}</StyledTitle>
                  <Icon
                    src="/assets/images/icons/chevron_right.svg"
                    size="xxs"
                  />
                </Component>
              </li>
            );
          }
        )}
      </StyledUl>
    </StyledNav>
  );
};

export default NavMenu;
