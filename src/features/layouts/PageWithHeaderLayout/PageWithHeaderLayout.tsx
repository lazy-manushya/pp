"use client";

import React from "react";

import { StyledContainer, StyledMain } from "./PageWithHeaderLayout.styles";
import { IPageWithHeaderLayoutProps } from "./PageWithHeaderLayout.types";
import Header from "./components/Header";

const PageWithHeaderLayoutProps: React.FC<IPageWithHeaderLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <StyledContainer>
      <Header {...headerProps} />
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  );
};

export default PageWithHeaderLayoutProps;
