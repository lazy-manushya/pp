import React from "react";

import Icon from "@/components/misc/Icon";

import {
  StyledButton,
  StyledLi,
  StyledLink,
  StyledNav,
  StyledTitle,
  StyledUl,
} from "./TabBar.styles";
import { ITabBarProps } from "./TabBar.types";
import { IButtonProps } from "@/components/input/Button";

const TabBar: React.FC<ITabBarProps> = ({ items, className }) => {
  return (
    <StyledNav className={className}>
      <StyledUl>
        {items.map((item) => {
          const {
            id,
            icon,
            title,
            link,
            primary = false,
            active = false,
            onClick,
          } = item;
          const Component = link ? StyledLink : StyledButton;
          const props: any = link
            ? { href: link }
            : ({
                onClick: () => {
                  if (onClick) onClick(item);
                },
                variant: "ghost",
              } satisfies IButtonProps);

          return (
            <StyledLi $primary={primary} key={id}>
              <Component $primary={primary} $active={active} {...props}>
                <Icon src={icon} alt={title} />
                {!primary && <StyledTitle>{title}</StyledTitle>}
              </Component>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

export default TabBar;
