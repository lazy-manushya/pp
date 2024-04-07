import React from "react";

import { StyledContainer, StyledTab } from "./Tabs.styles";
import { ITabsProps } from "./Tabs.types";

const Tabs: React.FC<ITabsProps> = ({ tabs, activeTabId, onChange }) => {
  return (
    <StyledContainer>
      {tabs.map((tab) => {
        const { id, title } = tab;

        return (
          <StyledTab
            key={id}
            variant="ghost"
            $active={activeTabId === id}
            onClick={() => {
              onChange(tab);
            }}
          >
            {title}
          </StyledTab>
        );
      })}

      
    </StyledContainer>
  );
};

export default Tabs;
